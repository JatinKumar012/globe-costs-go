import { Star, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Destination } from "@/data/destinations";
import { calculateTripCost } from "@/data/destinations";

export function DestinationCard({ d, days = 7 }: { d: Destination; days?: number }) {
  const cost = calculateTripCost(d, days, 1);
  return (
    <Card className="group relative overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] cursor-pointer pt-0">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={d.image}
          alt={`${d.city}, ${d.country}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold">
          <Star className="h-3 w-3 fill-accent text-accent" />
          {d.rating}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="flex items-center gap-1 text-xs opacity-90 mb-1">
            <MapPin className="h-3 w-3" />
            {d.country}
          </div>
          <h3 className="text-2xl font-bold leading-tight">{d.city}</h3>
          <p className="text-sm opacity-90 italic mt-0.5">{d.tagline}</p>
          <div className="mt-3 flex items-end justify-between">
            <div className="flex items-center gap-1 text-xs opacity-90">
              <Calendar className="h-3 w-3" />
              {d.bestTime}
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider opacity-75">from</div>
              <div className="text-xl font-bold">${cost.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 pt-3">
        <p className="text-sm text-muted-foreground mb-3">{d.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {d.highlights.slice(0, 3).map((h) => (
            <Badge key={h} variant="secondary" className="text-xs font-normal">
              {h}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
