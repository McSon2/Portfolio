import Link from "next/link";
import { getOtherApps } from "@/lib/apps";

type Props = {
  currentSlug: string;
  heading?: string;
  className?: string;
};

export function CrossAppNav({
  currentSlug,
  heading = "Other apps by Maxime",
  className = "",
}: Props) {
  const apps = getOtherApps(currentSlug);

  return (
    <nav
      aria-label="Other iOS apps by Maxime Saltet"
      className={`mt-[58px] border-t border-black pt-[30px] ${className}`}
    >
      <div className="mb-[20px] flex items-baseline justify-between gap-[15px]">
        <h2 className="font-display text-caption uppercase tracking-wider">
          {heading}
        </h2>
        <Link
          href="/apps"
          className="text-caption uppercase tracking-wider underline underline-offset-4 hover:opacity-60"
        >
          All apps →
        </Link>
      </div>

      <ul className="grid gap-x-[20px] gap-y-[15px] sm:grid-cols-2 md:grid-cols-3">
        {apps.map((app) => (
          <li key={app.slug}>
            <Link
              href={`/${app.slug}`}
              className="group block border-t border-black/20 pt-[10px] hover:border-black"
            >
              <p className="font-display text-[16px] leading-tight group-hover:underline">
                {app.name}
              </p>
              <p className="mt-[4px] text-[13px] leading-snug opacity-70">
                {app.tagline}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
