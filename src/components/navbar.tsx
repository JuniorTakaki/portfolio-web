interface NavbarProps {
  topic: string;
}

export function Navbar({ topic }: NavbarProps) {
  const href = `#${topic.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <a
      href={href}
      className="relative text-white font-semibold transition-colors duration-300 hover:text-purple-700">
      {topic}
    </a>
  );
}
