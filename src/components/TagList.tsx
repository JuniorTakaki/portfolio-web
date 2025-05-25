import { Rarity, RarityTag } from './Rarity';

interface Tag {
  label: string;
  rarity: Rarity;
}

interface TagListProps {
  tags: Tag[];
}

export const TagList = ({ tags }: TagListProps) => (
  <div className="flex justify-center text-center mt-3">
    <ul className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <RarityTag key={tag.label} label={tag.label} rarity={tag.rarity} />
      ))}
    </ul>
  </div>
);

export default TagList