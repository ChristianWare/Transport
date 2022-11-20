import About from "../comps/about/About";
import Fleet from "../comps/fleet/Fleet";
import Hero from "../comps/hero/Hero";
import Service from "../comps/services/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <Fleet />
    </>
  );
}
