import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="rounded-t-[28px] border-x border-t border-border-secondary bg-bg-primary">
      <div className="mx-auto w-full max-w-[1376px] px-4 py-4 sm:px-8">
        {/* Desktop: centered text links */}
        <nav
          aria-label="Contact and product links"
          className="hidden items-center justify-center gap-x-8 md:flex"
        >
          {site.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {site.phone}
          </a>
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Email
            </a>
          )}
        </nav>
        {/* Mobile: chip grid + copyright */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {site.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-border-secondary py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary odd:last:col-span-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center rounded-xl border border-border-secondary py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary odd:last:col-span-2"
            >
              {site.phone}
            </a>
          </div>
          {/* Year is baked in at build time — intentional for a static site. */}
          <p className="mt-4 text-center text-xs text-text-quaternary">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
