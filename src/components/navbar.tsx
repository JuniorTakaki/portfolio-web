interface NavbarProps {
    topic: string;
  }
  
  export function Navbar({ topic }: NavbarProps) {
    const href = `#${topic.toLowerCase().replace(/\s+/g, '-')}`;
  
    return (
      <a
        href={href}
        className="relative text-white font-semibold transition-colors duration-300 hover:text-purple-400 
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
        after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        {topic}
      </a>
    );
  }
  