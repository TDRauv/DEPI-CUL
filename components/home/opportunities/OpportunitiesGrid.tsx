import { opportunities } from "@/data/opportunities";
import OpportunityCard from "./OpportunityCard";

export default function OpportunitiesGrid() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {opportunities.map((item) => (
        <OpportunityCard
          key={item.id}
          opportunity={item}
        />
      ))}
    </div>
  );
}
