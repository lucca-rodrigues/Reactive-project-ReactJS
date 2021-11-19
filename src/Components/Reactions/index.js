import React, { useState } from "react";
import { FacebookSelector } from "@charkour/react-reactions";

function ReactionsComponent() {
  const [selectedIcon, setSelectedIcon] = useState("");
  function HandleClick(e) {
    console.log("Selected:", e);
  }
  return (
    <div className="facebook-actions">
      <FacebookSelector
        onSelect={(e) => setSelectedIcon(e)}
        onClick={HandleClick}
      />
      <p> {selectedIcon && `Selected Icon: ${selectedIcon}`}</p>
      <h1>Test build Webpack</h1>
    </div>
  );
}

export { ReactionsComponent };
