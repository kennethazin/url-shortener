'use client'

import React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowDown, Loader } from "lucide-react";
import { toast } from "sonner";

interface ShortenFormProps {
  handleUrlShortened: () => void;
}

export default function ShortenForm({handleUrlShortened}: ShortenFormProps) {
const [url, setUrl] = useState<string>('');
const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevents reloading the page

    if (!url) {
      toast.error('Please enter a URL');
      return;
    }

    if (!url.startsWith('http')) {
      toast.error('Please enter a valid URL');
      return;
    }


    setIsLoading(true);
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {'Content-type': 'application/json' },
        body: JSON.stringify({
          url,
        }), 
      });
      await response.json();
      setUrl('');
      handleUrlShortened();
      toast.success('Link shortened successfully!');

    } catch(error) {
      console.error('Failed to shorten URL:', error);
      toast.error('Failed to shorten URL');
    } finally {
      setIsLoading(false);
    }
  }

  
  return (
    <form onSubmit={handleSubmit} className="mb-4 mt-2" noValidate>
      <div className="flex flex-row space-x-2">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-12 bg-white"
          type="url"
          placeholder="Enter URL to shorten"
          required
        />
        <Button className="h-12 bg-orange-600 w-12 hover:bg-orange-700" type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : <ArrowDown className="h-5 w-5" />}
        </Button>
      </div>
    </form>
  );
}
