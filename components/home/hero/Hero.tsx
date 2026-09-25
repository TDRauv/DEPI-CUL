import HeroCarousel from "./HeroCarrousel";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroCarousel />

      <div className="absolute inset-0 z-20 pointer-events-none">
        <HeroContent />
      </div>
    </section>
  );
}