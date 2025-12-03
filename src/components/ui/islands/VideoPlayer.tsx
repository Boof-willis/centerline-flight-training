import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  modal?: boolean;
}

export default function VideoPlayer({ videoSrc, thumbnailSrc, modal = false }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Handle modal mode
  const handlePlayModal = () => {
    setIsModalOpen(true);
    // Auto-play when modal opens
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.play();
      }
    }, 100);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
  };

  // Handle inline mode
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  if (modal) {
    return (
      <>
        {/* Thumbnail with Play Button */}
        <div className="relative rounded-[16px] overflow-hidden w-full h-full flex-shrink-0 group cursor-pointer" onClick={handlePlayModal}>
          <img
            src={thumbnailSrc}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/30">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-gray-900 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-[10000] w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6 text-white"
                strokeWidth={2}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div 
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src={videoSrc}
                className="w-full h-full rounded-lg"
                controls
                controlsList="nodownload"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  // Inline mode (original behavior)
  return (
    <div className="relative rounded-[16px] overflow-hidden w-full md:w-[408px] h-[245px] flex-shrink-0 group">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        onPause={handlePause}
        onEnded={handleEnded}
        controls={isPlaying}
        poster={thumbnailSrc}
      />

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-all hover:bg-black/30"
          onClick={handlePlay}
        >
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-gray-900 ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

