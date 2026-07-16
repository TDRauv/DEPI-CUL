import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Opportunities from "@/components/home/Opportunities";
import Dashboard from "@/components/home/dashboard/Dashboard";


export default function Home() {
  return (
    <main>

      <Hero />

      <Dashboard />

      <Stats />

      <Opportunities />

    </main>
  );
}
