import { useEffect, useState } from 'react';
import { FullscreenImageModal } from './FullscreenImage';
import { useLanguage } from '../context/LanguageContext';

export interface CertificateItem {
  title: string;
  description?: string;
  certificateImage?: string;
  certificatePdf?: string;
}

interface CertificateGalleryProps {
  items: CertificateItem[];
}

const PdfPreview = ({ url, title, className }: { url: string; title: string; className: string }) => (
  <div className={`relative overflow-hidden border border-white/10 bg-white ${className}`}>
    <object data={url} type="application/pdf" aria-label={`PDF do certificado de ${title}`} className="absolute inset-0 h-full w-full">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full items-center justify-center bg-[#071c26] p-2 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-cyan-200"
      >
        Abrir PDF
      </a>
    </object>
  </div>
);

export const CertificateGallery = ({ items }: CertificateGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});
  const { t } = useLanguage();
  const activeItem = items[activeIndex];

  useEffect(() => {
    if (items.length < 2) {
      return;
    }

    const carouselTimer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(carouselTimer);
  }, [items.length]);

  const handleImageError = (index: number) => {
    setBrokenImages((current) => ({ ...current, [index]: true }));
  };

  const selectCertificate = (index: number) => {
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  const visibleCertificateIndexes = [-1, 0, 1].map(
    (offset) => (activeIndex + offset + items.length) % items.length,
  );

  return (
    <div className="mx-auto w-11/12 max-w-5xl">
      <div className="hidden gap-4 md:grid md:grid-cols-[minmax(0,1.45fr)_minmax(14rem,0.7fr)] lg:gap-5">
        <article className="relative overflow-hidden border border-sky-300/20 bg-[#071c26] p-3  lg:p-4">
          <div className="relative flex h-full flex-col">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.28em] text-cyan-200/60">
                  0{activeIndex + 1} / 0{items.length}
                </p>
                <h3 className="max-w-xl text-lg font-bold text-white lg:text-xl">{activeItem.title}</h3>
                <p className="mt-1 text-[11px] text-sky-100/60">{activeItem.description}</p>
              </div>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-cyan-200">
                {t('certified')}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-[0.9fr_1.2fr_0.9fr] items-center gap-2 lg:gap-3">
              {visibleCertificateIndexes.map((itemIndex) => {
                const item = items[itemIndex];
                const isActive = itemIndex === activeIndex;
                const isBroken = !!item.certificateImage && !!brokenImages[itemIndex];

                return (
                  <button
                    type="button"
                    key={`${item.title}-${itemIndex}`}
                    onClick={() => selectCertificate(itemIndex)}
                    className={`group relative overflow-hidden border bg-black/40 p-1.5 text-left transition-all ${
                      isActive
                        ? 'border-cyan-300/60 bg-cyan-300/10'
                        : 'border-white/10 opacity-70 hover:border-sky-300/30 hover:opacity-100'
                    }`}
                  >
                    {item.certificatePdf ? (
                      <PdfPreview
                        url={item.certificatePdf}
                        title={item.title}
                        className={`aspect-[1.414/1] w-full ${isActive ? 'max-h-44' : 'max-h-32'}`}
                      />
                    ) : item.certificateImage && !isBroken ? (
                      <img
                        src={item.certificateImage}
                        alt={`Certificado de ${item.title}`}
                        className={`w-full object-contain ${isActive ? 'h-36 lg:h-44' : 'h-28 lg:h-32'}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          setFullscreenImage(item.certificateImage ?? null);
                        }}
                        onError={() => handleImageError(itemIndex)}
                      />
                    ) : (
                      <div className={`flex items-center justify-center bg-black/30 text-center ${isActive ? 'h-36 lg:h-44' : 'h-28 lg:h-32'}`}>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-100/50">cert</span>
                      </div>
                    )}
                    <span className={`mt-1.5 block truncate px-1 font-mono text-[9px] uppercase tracking-[0.12em] ${isActive ? 'text-cyan-200' : 'text-sky-100/50'}`}>
                      {isActive ? t('current') : itemIndex === (activeIndex - 1 + items.length) % items.length ? t('previous') : t('next')}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] text-sky-100/45">{activeItem.title} · {t('certification')}</span>
                {activeItem.certificatePdf && (
                  <a
                    href={activeItem.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-200 hover:text-white"
                  >
                    {t('openPdf')}
                  </a>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={t('previous')}
                  className="border border-sky-300/30 px-2.5 py-1 text-xs text-sky-100 transition-colors hover:border-cyan-300 hover:text-cyan-200"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={t('next')}
                  className="border border-sky-300/30 px-2.5 py-1 text-xs text-sky-100 transition-colors hover:border-cyan-300 hover:text-cyan-200"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-2">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-100/50">{t('exploreCredentials')}</p>
          <div className="credential-list flex max-h-[18rem] flex-col gap-2 overflow-y-auto pr-1">
            {items.map((item, index) => {
              const isBroken = !!item.certificateImage && !!brokenImages[index];

              return (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => selectCertificate(index)}
                  className={`group relative border p-2.5 text-left transition-all ${
                    index === activeIndex
                      ? 'border-cyan-300/40 bg-cyan-300/10'
                      : 'border-white/10 bg-black/40 hover:border-sky-300/30 hover:bg-sky-950/30'
                  }`}
                >
                  <span className="font-mono text-[9px] text-cyan-300/60">0{index + 1}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{item.title}</span>
                  <span className="mt-1 block text-[10px] text-sky-100/50">{isBroken ? t('imageUnavailable') : t('certification')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border border-sky-300/20 bg-[#071c26] p-3 md:hidden">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-200/60">
              0{activeIndex + 1} / 0{items.length}
            </p>
            <h3 className="mt-1 truncate text-base font-bold text-white">{activeItem.title}</h3>
          </div>
          <span className="shrink-0 border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-cyan-200">
            {t('current')}
          </span>
        </div>

        {activeItem.certificatePdf ? (
          <PdfPreview
            url={activeItem.certificatePdf}
            title={activeItem.title}
            className="aspect-[1.414/1] w-full max-h-48"
          />
        ) : activeItem.certificateImage && !brokenImages[activeIndex] ? (
          <img
            src={activeItem.certificateImage}
            alt={`Certificado de ${activeItem.title}`}
            className="h-48 w-full cursor-zoom-in border border-white/10 bg-black/30 object-contain"
            onClick={() => setFullscreenImage(activeItem.certificateImage ?? null)}
            onError={() => handleImageError(activeIndex)}
          />
        ) : (
          <div className="flex h-48 items-center justify-center border border-white/10 bg-black/30 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-100/60">{t('imageUnavailable')}</p>
          </div>
        )}

        <p className="mt-3 line-clamp-2 text-xs leading-5 text-sky-100/60">{activeItem.description}</p>

        {activeItem.certificatePdf && (
          <a
            href={activeItem.certificatePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex border border-cyan-300/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-200"
          >
            {t('openPdf')}
          </a>
        )}

        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label={t('previous')}
            className="flex h-9 w-9 items-center justify-center border border-sky-300/30 text-sky-100"
          >
            ←
          </button>
          <div className="flex min-w-0 flex-1 gap-1.5 overflow-hidden">
            {items.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => selectCertificate(index)}
                aria-label={item.title}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-cyan-300' : 'bg-sky-100/20'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label={t('next')}
            className="flex h-9 w-9 items-center justify-center border border-sky-300/30 text-sky-100"
          >
            →
          </button>
        </div>
      </div>

      <FullscreenImageModal imageUrl={fullscreenImage} onClose={() => setFullscreenImage(null)} />
    </div>
  );
};
