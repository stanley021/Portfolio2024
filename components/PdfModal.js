import React from 'react';

const PdfModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    // Check if the click target is the overlay (not the modal content)
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
      onClick={handleOverlayClick} // Add click handler to the overlay
    >
      <div className="bg-white p-4 rounded-lg shadow-lg relative w-[90vw] max-w-[1200px] h-[80vh] max-h-[700px]">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe
          src={pdfUrl}
          width="100%"
          height="100%" // Make iframe fill the modal
          title="Resume"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default PdfModal;
