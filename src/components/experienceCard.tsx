export interface ExperienceCardProps {
  image: string;
  alt: string;
  company: string;
  role: string;
  date: string;
  type: 'atual' | 'temporario';
}

export function ExperienceCard({ image, alt, company, role, date }: ExperienceCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm hover:border-violet-500 transition-all">
      <div className="w-16 h-16 rounded-lg overflow-hidden border border-zinc-600 shrink-0">
        <img src={image} alt={alt} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white">{company}</h3>
        <p className="text-sm text-zinc-300">{role}</p>
        <p className="text-xs text-zinc-500 italic">{date}</p>
      </div>
    </div>
  );
}
