interface TagListProps {
  tags: string[];
}

export const TagList = ({ tags }: TagListProps) => (
  <div className="flex justify-center text-center mt-3">
    <ul className="flex gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <li
          key={index}
          className="rounded-full border px-3 py-1 text-purple-400 border-purple-500/15 bg-purple-500/10"
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>
);
