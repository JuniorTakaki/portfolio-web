export function SocialSidebar() {
  const links = [
    {
      href: "https://www.linkedin.com/in/junior-takaki/",
      color: "hover:text-blue-500",
      icon: "ri-linkedin-line",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/takaki.tech/",
      color: "hover:text-pink-500",
      icon: "ri-instagram-line",
      label: "Instagram",
    },
    {
      href: "https://github.com/JuniorTakaki",
      color: "hover:text-gray-100",
      icon: "ri-github-line",
      label: "GitHub",
    },
    {
      href: "https://wa.me/+5511951068980",
      color: "hover:text-green-500",
      icon: "ri-whatsapp-line",
      label: "WhatsApp",
    },
    {
      href: "mailto:juniortakaki10@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Contato&body=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
      color: "hover:text-red-500",
      icon: "ri-mail-line",
      label: "Email",
    },
  ];

  return (
    <aside className={`
      hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-6
      backdrop-blur-md p-4 rounded-2xl shadow-lg z-50 bg-purple-700/5`}>
      {links.map(({ href, color, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-300 ${color} transition-transform hover:scale-110 text-2xl`}
          aria-label={label}
        >
          <i className={icon}></i>
        </a>
      ))}
    </aside>
  );
}
