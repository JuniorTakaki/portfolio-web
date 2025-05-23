import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BriefExperienceItem {
  title: string;
  description?: string;
  certificateImage?: string;
}

export const BriefExperienceCard = ({ title, description, certificateImage }: BriefExperienceItem) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  

  return (
    <div
      className=" text-white p-4 w-full h-full max-w-md mx-auto transition-all duration-300"
    >
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setExpanded(!expanded)}
      >
      <span className="relative font-semibold text-lg">
        {title}
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-700 animate-underline pointer-events-none">
        </span>
        </span>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <AnimatePresence>
  {expanded && description && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden mt-2 text-sm text-gray-300"
    >
      <p>{description}</p>

      {certificateImage && (
        <img
          src={certificateImage}
          alt={`Certificado de ${title}`}
          className="mt-2 rounded-lg shadow-md"
          onClick={() => setFullscreenImage(certificateImage)}
        />
      )}
      {fullscreenImage && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
    onClick={() => setFullscreenImage(null)}
  >
    <img
      src={fullscreenImage}
      alt="Certificado em tela cheia"
      className="max-w-full max-h-full rounded-lg shadow-xl"
    />
  </div>
)}

    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};
