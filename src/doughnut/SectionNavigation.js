import React from "react";

const SectionNavigation = ({ currentIndex, handleNavClick }) => {
  return (
    <div className="section-navigation">
      {currentIndex > 0 && (
        <button className="btn btn-primary round" onClick={handleNavClick(currentIndex - 1)}>
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
      )}
      {currentIndex < 3 && (
        <button className="btn btn-primary round ml-10" onClick={handleNavClick(currentIndex + 1)}>
          <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      )}
    </div>
  );
};

export default SectionNavigation;
