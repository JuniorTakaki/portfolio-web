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
    <div
      className="
        flex items-center gap-6 rounded-xl border border-zinc-700 
        bg-neutral-800 backdrop-blur-md p-5 transition-all duration-300 ease-in-out
        group-hover:blur-sm hover:!blur-none hover:scale-105
      "
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden border border-zinc-600">
        <img src={image} alt={alt} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-white">{company}</h3>
        <p className="text-sm text-zinc-300">{role}</p>
        <p className="text-sm italic text-zinc-500">{date}</p>
      </div>
    </div>
  );
}
