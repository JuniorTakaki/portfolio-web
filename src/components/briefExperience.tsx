import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TagList } from './TagList';
import { FullscreenImageModal } from './FullscreenImage';
import { Rarity } from './Rarity';

interface Tag {
  label: string;
  rarity: Rarity;
}

interface BriefExperienceItem {
  title: string;
  description?: string;
  certificateImage?: string;
  tags?: Tag[];
}

export const BriefExperienceCard = ({
  title,
  description,
  certificateImage,
  tags = [],
}: BriefExperienceItem) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="mx-auto h-full w-full max-w-md rounded-2xl border border-sky-300/15 bg-white/[0.04] p-5 text-white transition-all duration-300 hover:border-cyan-300/30">
      <button
        className="flex items-center justify-between w-full text-left"
      >
        <span className="relative text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-200">
          {title}
          <span/>
        </span>
      </button>

      <AnimatePresence>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden text-sm text-sky-100/65"
          >
            <p>{description}</p>

            {certificateImage && (
              <img
                src={certificateImage}
                alt={`Certificado de ${title}`}
                className="mt-3 cursor-pointer rounded-lg border border-sky-300/10"
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
