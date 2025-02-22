"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { Button } from "./ui/button";
import {
  Check,
  CopyIcon,
  MousePointerClick,
  CornerDownRight,
} from "lucide-react";
import UrlListSkeleton from "./url-list-skeleton";
import { Card } from "./ui/card";
import { toast } from "sonner";

type Url = {
  id: string;
  shortCode: string;
  originalUrl: string;
  visits: number;
};

export default function UrlList() {
  const [urls, setUrls] = useState<Url[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyUrl, setCopyUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const shortenerUrl = (code: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

  const fetchUrls = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/urls");
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.error("Failed to fetch URLs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyUrl = (code: string) => {
    const fullUrl = `${shortenerUrl(code)}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setCopyUrl(code);
      toast.success("URL has been copied to clipboard");
      setTimeout(() => {
        setCopied(false);
        setCopyUrl("");
      }, 2000);
    });
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  if (isLoading) {
    return <UrlListSkeleton />;
  }

  return (
    <div>
      <ul className="space-y-2">
        {urls.map((url) => (
          <li key={url.id} className="flex items-center gap-1 justify-between ">
            <Card className="w-full px-2 py-1 md:px-4 md:py-2 shadow-none flex  items-center justify-between h-24 text-center ">
              <div>
                <Link
                  href={`/${url.shortCode}`}
                  target="_blank"
                  className="text-black-600 font-bold mb-1"
                >
                  {shortenerUrl(url.shortCode)}
                </Link>
                <div className="flex flex-row items-center text-gray-400 text-xs gap-1">
                  <CornerDownRight className="w-4 h-4 stroke-1 " />
                    {url.originalUrl.length > 10
                    ? `${url.originalUrl.substring(0, 30)}...`
                    : url.originalUrl}
                </div>
              </div>
              <div className="flex items-center gap-3 flex-row sm:flex-row">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:bg-muted border  bg-zinc-50 w-8 h-8 rounded-full  "
                  onClick={() => handleCopyUrl(url.shortCode)}
                >
                  {copied && copyUrl == url.shortCode ? (
                    <Check />
                  ) : (
                    <CopyIcon />
                  )}
                  <span className="sr-only">Copy URL</span>
                </Button>
                <Card className="py-1 px-1 shadow-none bg-zinc-50 rounded-md hover:bg-muted w-20 ">
                  <span className="flex items-center justify-between text-muted-foreground text-xs w-full">
                    <MousePointerClick className="w-4 h-4" />
                    {url.visits} {url.visits === 1 ? "click" : "clicks"}
                  </span>
                </Card>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
