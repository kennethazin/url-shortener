import UrlShortenerContainer from "@/components/url-shortener-container";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 mx-auto max-w-xl py-12 md:py-24 space-y-6 px-4">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Short links with superpowers</h1>
          <p className="md:text-xl text-muted-foreground font-normal">Shorten your URLs and share them easily</p>
        </div>
        <UrlShortenerContainer />
      </main>
      <DotPattern
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}