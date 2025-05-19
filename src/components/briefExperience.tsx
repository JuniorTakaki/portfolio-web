interface BriefExperienceItem {
    title: string;
    description?: string;
    icon?: string;
  }
  
  export function BriefExperienceCard({ title, description, icon }: BriefExperienceItem) {
    return (
      <li className="flex items-start gap-2">
        {icon && <span className="text-purple-400 text-xl">{icon}</span>}
        <div>
          <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
          {description && <p className="text-sm text-gray-400 leading-relaxed">{description}</p>}
        </div>
      </li>
    );
  }
  