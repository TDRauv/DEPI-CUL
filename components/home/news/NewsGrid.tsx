import NewsCard from "./NewsCard";
import { news } from "@/data/news";

interface NewsGridProps {
  limit?: number;
}

export default function NewsGrid({ limit }: NewsGridProps) {
  // Ordena de mayor a menor según el número de id
  const sortedNews = [...news].sort((a, b) => Number(b.id) - Number(a.id));

  // Aplica el límite si se proporciona (en la Home se pasan 3)
  const displayedNews = limit ? sortedNews.slice(0, limit) : sortedNews;

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {displayedNews.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}





