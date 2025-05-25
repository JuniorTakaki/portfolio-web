export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

interface RarityTagProps {
  label: string;
  rarity: Rarity;
}

const rarityStyles: Record<Rarity, string> = {
  common: 'bg-green-700/10 text-green-400 hover:bg-green-600/10 hover:text-green-600 border-green-600',
  uncommon: 'bg-blue-700/10 text-blue-400 hover:bg-blue-600/10 hover:text-blue-600 border-blue-600',
  rare: 'bg-indigo-700/10 text-indigo-400 hover:bg-indigo-600/10 hover:text-indigo-600 border-indigo-600',
  epic: 'bg-purple-700/10 text-purple-400 hover:bg-purple-600/10 hover:text-purple-600 border-purple-600',
  legendary: 'bg-yellow-700/10 text-yellow-400 hover:bg-yellow-600/10 hover:text-yellow-600 border-yellow-600',
};

{/*const rarityLabels: Record<Rarity, string> = {
  common: 'Comum',
  uncommon: 'Incomum',
  rare: 'Raro',
  epic: 'Épico',
  legendary: 'Lendário',
}; */}

export const RarityTag = ({ label, rarity }: RarityTagProps) => {
  return (
    <li
      className={`rounded-full border px-3 py-1 transition-colors duration-300 cursor-default group relative
                  ${rarityStyles[rarity]}`}
    >
      <span>{label}</span>
      {/*<div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-black text-white rounded px-2 py-1 pointer-events-none z-10 whitespace-nowrap">
        Raridade: {rarityLabels[rarity]}
      </div>*/}
    </li>
  );
};
