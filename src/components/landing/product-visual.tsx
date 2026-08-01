import Image from "next/image";

export function ProductVisual({
  className,
  ariaLabel = "Borcan PROCTOREX Cremă naturală 30 g, cu flori de calendula, lavandă și plante",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div className={`relative h-[25rem] overflow-visible sm:h-[26rem] ${className ?? ""}`}>
      <Image
        src="/proctorex/proctorex-hero.png"
        alt={ariaLabel}
        width={1040}
        height={1512}
        unoptimized
        priority
        className="absolute left-[-1rem] top-[-19rem] z-10 h-auto w-[36.5rem] max-w-none sm:left-[-1rem] sm:w-[36.5rem]"
      />
    </div>
  );
}
