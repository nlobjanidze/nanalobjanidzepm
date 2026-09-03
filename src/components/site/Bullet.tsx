export function Bullet({ tone = "mint" }: { tone?: "mint" | "navy" }) {
  const isNavy = tone === "navy";
  return (
    <span
      aria-hidden
      className="mt-[0.45em] inline-flex h-1.5 w-1.5 shrink-0 rounded-full"
      style={{
        background: isNavy ? "var(--navy)" : "var(--mint)",
        boxShadow: isNavy
          ? "0 0 0 4px rgba(14,61,107,0.12)"
          : "0 0 0 4px var(--mint-soft)",
      }}
    />
  );
}
