import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TagList } from './TagList';
import { FullscreenImageModal } from './FullscreenImage';

interface BriefExperienceItem {
  title: string;
  description?: string;
  certificateImage?: string;
  tags?: string[];
}

export const BriefExperienceCard = ({
  title,
  description,
  certificateImage,
  tags = [],
}: BriefExperienceItem) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-white p-4 w-full h-full max-w-md mx-auto transition-all duration-300 ">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="relative font-semibold text-lg  text-white  hover:scale-110 duration-300">
          {title}
          <span/>
        </span>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <AnimatePresence>
        {expanded && description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-2 text-sm text-gray-300"
          >
            <p>{description}</p>

            {certificateImage && (
              <img
                src={certificateImage}
                alt={`Certificado de ${title}`}
                className="mt-2 rounded-lg shadow-md cursor-pointer"
                onClick={() => setFullscreenImage(certificateImage)}
              />
            )}

            {tags.length > 0 && <TagList tags={tags} />}

            <FullscreenImageModal
              imageUrl={fullscreenImage}
              onClose={() => setFullscreenImage(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
