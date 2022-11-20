import About from "../comps/about/About";
import Fleet from "../comps/fleet/Fleet";
import Hero from "../comps/hero/Hero";
import PreFooter from "../comps/preFooter/PreFooter";
import Service from "../comps/services/Service";
import Value from "../comps/value/Value";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <Fleet />
      <Value />
      <PreFooter />
    </>
  );
}
