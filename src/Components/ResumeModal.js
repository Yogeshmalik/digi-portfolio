import React, { useState } from "react";
import "./ResumeModal.css";

const ResumeModal = ({ isOpen, onClose, resumePath }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    fetch(resumePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "yogesh_malik.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Download failed:", error));
  };

  const handleOpenNewTab = () => {
    window.open(resumePath, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className={`resume-modal-container ${isFullscreen ? "fullscreen" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <div className="resume-modal-title">Resume</div>
          <div className="resume-modal-actions">
            <button
              className="resume-modal-btn"
              onClick={handleDownload}
              title="Download Resume"
            >
              <i className="fa fa-download"></i> Download
            </button>
            <button
              className="resume-modal-btn"
              onClick={handleOpenNewTab}
              title="Open in New Tab"
            >
              <i className="fa fa-external-link"></i> Open in New Tab
            </button>
            <button
              className="resume-modal-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title="Toggle Fullscreen"
            >
              <i
                className={`fa fa-${isFullscreen ? "compress" : "expand"}`}
              ></i>
            </button>
            <button
              className="resume-modal-btn resume-modal-close"
              onClick={onClose}
              title="Close"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe
            src={`${resumePath}#toolbar=1`}
            type="application/pdf"
            width="100%"
            height="100%"
            title="Resume PDF"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
