import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

import content from "../config/content.json";
import theme from "../config/theme";

export default function Home() {
  return (
    <main style={{ background: theme.background, color: theme.text }}>
      <Hero data={content.hero} theme={theme} />
      <Features items={content.features} />
      {content.pricing?.enabled && <Pricing data={content.pricing} />}
      {content.contact?.enabled && <Contact data={content.contact} />}
    </main>
  );
}
