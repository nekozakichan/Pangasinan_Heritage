export default function AboutPangasinan() {
  return (
    <section
      aria-label="About Pangasinan"
      className="bg-[var(--tide)] text-[var(--sand)] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--sand)]/70">
            <span className="w-8 h-px bg-[var(--sunset)]"></span>
            About the Province
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            A Realm Defined by{" "}
            <span className="text-[var(--sunset)]">Islands, Faith, and Flavor</span>
          </h2>

          <p className="text-[var(--sand)]/80 leading-relaxed mt-6">
            The 9th largest ethnic group in the Philippines, the Pangasinense
            population is concentrated in Lingayen Gulf, Pangasinan Province,
            in the central area of Luzon Island. Their language can be called
            both Pangasinan and Pangasinense.
          </p>

          <p className="text-[var(--sand)]/80 leading-relaxed mt-4">
            Pangasinan is the largest province in the Ilocos Region, with 44
            municipalities. Its name means &quot;land of salt,&quot; derived
            from <em>asin</em> (salt) and the affixes <em>pang-</em> and{" "}
            <em>-an</em> (&quot;place of&quot;). Other principal economic
            activities apart from salt production are farming and fishing.
          </p>

          <div className="flex divide-x divide-white/20 mt-8 pt-6 border-t border-white/10">
            <div className="pr-6">
              <p className="text-lg font-semibold">3.1M</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--sand)]/60">
                Population
              </p>
            </div>
            <div className="px-6">
              <p className="text-lg font-semibold">44</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--sand)]/60">
                Towns
              </p>
            </div>
            <div className="pl-6">
              <p className="text-lg font-semibold">4</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--sand)]/60">
                Cities
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 h-80 md:h-[420px]">
          <iframe
            title="Map of Pangasinan"
            src="https://www.google.com/maps?q=Pangasinan,Philippines&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}