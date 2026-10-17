export function SocialSidebar() {
  const links = [
    {
      href: "https://www.linkedin.com/in/junior-takaki/",
      color: "hover:text-cyan-300",
      icon: "ri-linkedin-line",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/takaki.tech/",
      color: "hover:text-cyan-300",
      icon: "ri-instagram-line",
      label: "Instagram",
    },
    {
      href: "https://github.com/JuniorTakaki",
      color: "hover:text-sky-200",
      icon: "ri-github-line",
      label: "GitHub",
    },
    {
      href: "https://wa.me/+5511951068980",
      color: "hover:text-cyan-300",
      icon: "ri-whatsapp-line",
      label: "WhatsApp",
    },
    {
      href: "mailto:juniortakaki10@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Contato&body=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
      color: "hover:text-cyan-300",
      icon: "ri-mail-line",
      label: "Email",
    },
  ];

  return (
    <aside
      aria-label="Social links"
      className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center border border-sky-300/20 bg-[#080609]/95 px-2 py-3 backdrop-blur-xl xl:flex"
    >
      <span className="mb-3 [writing-mode:vertical-rl] rotate-180 font-mono text-[8px] uppercase tracking-[0.28em] text-cyan-300/65">
        connect
      </span>
      <span className="mb-3 h-8 w-px bg-cyan-300/30" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        {links.map(({ href, color, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex h-9 w-9 items-center justify-center text-lg text-gray-300 ${color} transition-colors hover:bg-cyan-300/10`}
            aria-label={label}
          >
            <i className={icon} aria-hidden="true"></i>
            <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap border border-sky-300/20 bg-[#080609] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-sky-100/80 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
