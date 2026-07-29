import Hero from "@/components/home/hero/Hero";
import Stats from "@/components/home/Stats";
import Opportunities from "@/components/home/opportunities/Opportunities";
import Dashboard from "@/components/home/dashboard/Dashboard";
import News from "@/components/home/news/News";



export default function Home() {
  return (
    <main>

      <Hero />

      <Opportunities />

      <News />

      <Stats />

    </main>
  );
}
