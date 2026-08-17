import Hero from "./components/Hero";
import AboutPangasinan from "./components/AboutPangasinan";
import QuickFacts from "./components/QuickFacts";
import HeritageCard from "./components/HeritageCard";
import CultureCard from "./components/CultureCard";
import WaveDivider from "./components/WaveDivider";
import Reveal from "./components/Reveal";
import heritageSites from "./data/heritageSites";
import culturePeople from "./data/culturePeople";

export default function Home() {
  return (
    <>
      <div id="home" className="bg-[var(--tide)]">
        <Hero />
        <QuickFacts />
        <Reveal>
          <AboutPangasinan />
        </Reveal>
      </div>

      <section id="discover" className="max-w-4xl mx-auto px-4 py-16 scroll-mt-20">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--tide)] text-center mb-2">
            Discover Heritage Sites
          </h2>
          <p className="text-center text-[var(--ink)]/70 mb-8">
            Explore every heritage site the province has to offer.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heritageSites.map((site, i) => (
            <Reveal key={site.id} delay={i * 0.1}>
              <HeritageCard
                id={site.id}
                title={site.title}
                description={site.description}
                image={site.image}
                location={site.location}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rotate-180">
        <WaveDivider />
      </div>

      <section id="culture" className="bg-[var(--tide)] text-[var(--sand)] py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Culture & Its People
            </h2>
            <p className="text-center text-[var(--sand)]/80 max-w-2xl mx-auto mb-10">
              Pangasinan's identity is shaped by its coastal traditions,
              distinct language, and the everyday lives of the communities
              who call it home.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturePeople.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <CultureCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}