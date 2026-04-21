import { useState, useMemo } from "react";
import { Plane, Hotel, Utensils, Camera, Bus, Users, Calendar as CalIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import type { Destination } from "@/data/destinations";

export function CostCalculator({ d }: { d: Destination }) {
  const [days, setDays] = useState(7);
  const [travelers, setTravelers] = useState(2);

  const breakdown = useMemo(() => {
    const flight = d.costs.flight * travelers;
    const hotel = d.costs.hotelPerNight * days * Math.ceil(travelers / 2);
    const food = d.costs.foodPerDay * days * travelers;
    const activities = d.costs.activitiesPerDay * days * travelers;
    const transport = d.costs.transportPerDay * days * travelers;
    const total = flight + hotel + food + activities + transport;
    return { flight, hotel, food, activities, transport, total };
  }, [d, days, travelers]);

  const items = [
    { icon: Plane, label: "Flights", value: breakdown.flight, color: "text-ocean" },
    { icon: Hotel, label: "Hotels", value: breakdown.hotel, color: "text-primary" },
    { icon: Utensils, label: "Food", value: breakdown.food, color: "text-sunset" },
    { icon: Camera, label: "Activities", value: breakdown.activities, color: "text-accent" },
    { icon: Bus, label: "Transport", value: breakdown.transport, color: "text-primary-glow" },
  ];

  return (
    <Card className="p-6 shadow-[var(--shadow-elegant)] border-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">Estimate your trip</h3>
          <p className="text-sm text-muted-foreground">to {d.city}, {d.country}</p>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Total</div>
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            ${breakdown.total.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <CalIcon className="h-4 w-4" /> Duration: <span className="font-semibold">{days} days</span>
          </Label>
          <Slider value={[days]} onValueChange={(v) => setDays(v[0])} min={2} max={21} step={1} />
        </div>
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4" /> Travelers: <span className="font-semibold">{travelers}</span>
          </Label>
          <Slider value={[travelers]} onValueChange={(v) => setTravelers(v[0])} min={1} max={6} step={1} />
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item) => {
          const pct = (item.value / breakdown.total) * 100;
          return (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex items-center gap-2 w-28">
                <item.icon className={`h-4 w-4 ${item.color}`} />
                <span className="text-sm">{item.label}</span>
              </div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="w-20 text-right text-sm font-semibold">
                ${item.value.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
