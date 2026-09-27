import OpportunityCard from "./OpportunityCard";
import { opportunities } from "@/data/opportunities";

interface Props {
  limit?: number;
}

export default function OpportunitiesGrid({ limit }: Props) {
  const displayedOpportunities = limit
    ? opportunities.slice(0, limit)
    : opportunities;

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {displayedOpportunities.map((item) => (
        <OpportunityCard key={item.id} opportunity={item} />
      ))}
    </div>
  );
}