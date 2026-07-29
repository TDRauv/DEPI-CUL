import NewsCard from "./NewsCard";
import { news } from "@/data/news";

export default function NewsGrid() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}
