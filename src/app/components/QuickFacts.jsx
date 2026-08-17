const facts = [
  { label: "Region", value: "Ilocos Region (Region I)" },
  { label: "Capital", value: "Lingayen" },
  { label: "Founded", value: "April 5, 1580" },
  { label: "Coastline", value: "Lingayen Gulf & West Philippine Sea" },
];

export default function QuickFacts() {
  return (
    <div className="relative z-10 -mt-12 px-4">
      <div className="max-w-4xl mx-auto bg-[var(--tide)]/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/20 text-center py-6">
          {facts.map((fact) => (
            <div key={fact.label} className="px-3 py-3 md:py-0">
              <p className="text-sm md:text-base font-semibold text-white leading-snug">
                {fact.value}
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/70 mt-1">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}