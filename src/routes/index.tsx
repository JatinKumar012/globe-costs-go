import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, Compass, Globe2, Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/DestinationCard";
import { CostCalculator } from "@/components/CostCalculator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wanderlust — Discover the World's Best Travel Destinations" },
      {
        name: "description",
        content:
          "Explore the most beautiful places on Earth. Search any city and instantly see estimated travel costs, top attractions, and the best time to visit.",
      },
      { property: "og:title", content: "Wanderlust — Discover the World" },
      { property: "og:description", content: "Find your next adventure with cost estimates and city guides." },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return destinations;
    return destinations.filter(
      (d) =>
        d.city.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q) ||
        d.highlights.some((h) => h.toLowerCase().includes(q)),
    );
  }, [query]);

  const featured = filtered[0] ?? destinations[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Stunning view of Santorini, Greece at sunset"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col justify-center text-white">
          <div className="flex items-center gap-2 mb-4 opacity-90">
            <Compass className="h-5 w-5" />
            <span className="text-sm tracking-[0.3em] uppercase">Wanderlust</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-3xl">
            Discover the world's <span className="italic font-light">most beautiful</span> places
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl">
            Search any city, explore iconic landmarks, and see exactly how much your dream trip will cost.
          </p>

          <div className="mt-10 max-w-xl">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Paris, Tokyo, Bali..."
                className="h-16 pl-14 pr-32 text-base bg-background/95 backdrop-blur border-0 shadow-[var(--shadow-elegant)] rounded-full text-foreground"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-12 px-6 bg-gradient-to-r from-primary to-primary-glow border-0 shadow-[var(--shadow-glow)]"
              >
                Explore
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="opacity-75">Popular:</span>
              {["Paris", "Tokyo", "Maldives", "Iceland"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 flex gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2"><Globe2 className="h-4 w-4" /> 8 iconic destinations</div>
            <div className="hidden sm:flex items-center gap-2"><Sparkles className="h-4 w-4" /> Real cost estimates</div>
            <div className="hidden md:flex items-center gap-2"><MapPin className="h-4 w-4" /> Curated highlights</div>
          </div>
        </div>
      </header>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-sm tracking-[0.25em] uppercase text-primary mb-2">
              {query ? `Results for "${query}"` : "Featured destinations"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              {filtered.length > 0 ? "Where will you go next?" : "No matches found"}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Hand-picked places that belong on every traveler's bucket list — from tropical shores to mountain peaks.
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((d) => (
              <DestinationCard key={d.id} d={d} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            Try searching for Paris, Tokyo, Bali, or another iconic city.
          </div>
        )}
      </section>

      {/* Cost Calculator */}
      <section className="bg-gradient-to-br from-secondary/50 to-background py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="text-sm tracking-[0.25em] uppercase text-primary mb-2">Plan smart</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How much will it cost?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Adjust the duration and number of travelers to get a real estimate for {featured.city}.
            </p>
          </div>
          <CostCalculator d={featured} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Compass className="h-4 w-4" />
          <span className="font-semibold tracking-wider">WANDERLUST</span>
        </div>
        Made for dreamers and explorers. ✈️
      </footer>
    </div>
  );
}
