import React from "react";

const Modal = ({ children, isOpen, onClose, hideHeader, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40">
      <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header (if not hidden) */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>

            {/* Close button placed inside header so it never overlaps content */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-900 hover:bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                className="w-4 h-4"
                fill="none"
                aria-hidden="true"
              >
                {/* proper 'X' path */}
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* If header is hidden, show an absolute close button at top-right */}
        {hideHeader && (
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-orange-100 hover:text-gray-900 rounded-full w-8 h-8 flex justify-center items-center absolute top-3.5 right-3.5 z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              className="w-4 h-4"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
