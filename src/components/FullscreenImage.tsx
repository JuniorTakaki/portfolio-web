interface FullscreenimageModalProps {
    imageUrl: string | null;
    onClose: () => void;
  }
  
  export const FullscreenImageModal = ({ imageUrl, onClose }: FullscreenimageModalProps) => {
    if (!imageUrl) return null;
  
    return (
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
        onClick={onClose}
      >
        <img
          src={imageUrl}
          alt="Certificado em tela cheia"
          className="max-w-full max-h-full rounded-lg shadow-xl"
        />
      </div>
    );
  };
  