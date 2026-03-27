import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Location from "@/components/home/Location";
import Gallery from "@/components/home/Gallery";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Menu from "@/components/home/Menu";
import CTA from "@/components/home/CTA";
import Hero2 from "@/components/home/Hero2";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <Hero /> */}
      <Hero2 />
      <About />
      <Menu />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Location />
      <CTA />
    </div>
  );
}
