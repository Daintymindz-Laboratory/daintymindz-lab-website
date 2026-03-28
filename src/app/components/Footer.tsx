export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/5">
      {/* Marquee banner */}
      <div className="overflow-hidden py-6 border-b border-foreground/5">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="inline-block mx-8 font-display font-extrabold text-6xl lg:text-8xl text-foreground/[0.03] select-none"
            >
              DAINTYMINDZ
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-amber rounded-sm rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-graphite-deep font-display font-extrabold text-lg">
                  D
                </span>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-foreground">
                DAINTYMINDZ
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-foreground/40 max-w-sm">
              Where precision meets innovation. A forward-thinking lab dedicated
              to transforming ideas into impactful solutions through intellectual
              rigor and creative boldness.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {/* Social icons */}
              {[
                {
                  label: "LinkedIn",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  label: "Twitter",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-sm hover:border-amber/30 hover:bg-amber/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg
                    className="w-4 h-4 text-foreground/40 hover:text-amber transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider text-foreground mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {["About", "Mission", "Services", "Values", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="golden-border relative pb-0.5 font-body text-sm text-foreground/40 hover:text-amber transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider text-foreground mb-6">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-sm text-foreground/40">
                hello@daintymindz.com
              </li>
              <li className="font-body text-sm text-foreground/40">
                United Kingdom
              </li>
              <li className="font-body text-sm text-foreground/40">
                Mon – Fri, 9am – 6pm GMT
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-foreground/30">
            © {currentYear} DAINTYMINDZ LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-foreground/30 hover:text-amber transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-foreground/30 hover:text-amber transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
