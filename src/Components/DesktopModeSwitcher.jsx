import React, { useState } from 'react';

const DesktopModeSwitcher = () => {
  const [desktopMode, setDesktopMode] = useState(false);

  const toggleDesktopMode = () => {
    setDesktopMode(!desktopMode);

    // Change the window.innerWidth to simulate desktop mode
    if (desktopMode) {
      window.innerWidth = 1440; // Set your desired desktop width
    } else {
      window.innerWidth = 1024; // Set your desired mobile width
    }

    // Trigger a resize event to update the UI
    window.dispatchEvent(new Event('resize'));
  };

  return (
    <div>
      <button onClick={toggleDesktopMode}>
        Toggle Desktop Mode
      </button>
    </div>
  );
};

export default DesktopModeSwitcher;
