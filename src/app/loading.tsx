export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#070806] px-6"
      role="status"
      aria-label="Loading page"
    >
      <div className="w-full max-w-xl">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-[-0.12em]">
            M<span className="text-[#d7ff38]">D</span>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Loading experience
          </p>
        </div>

        <div className="mt-8 h-px overflow-hidden bg-white/10">
          <div className="h-full w-1/3 animate-[loading-bar_1.2s_ease-in-out_infinite] bg-[#d7ff38]" />
        </div>

        <div className="mt-8 space-y-4">
          <div className="h-12 w-4/5 animate-pulse bg-white/[0.04]" />
          <div className="h-12 w-3/5 animate-pulse bg-white/[0.04]" />
          <div className="h-4 w-2/5 animate-pulse bg-white/[0.03]" />
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}