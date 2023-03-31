import React, { useState, useEffect } from 'react';

function Prompt() {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        setShowDiv(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {showDiv && (
        <div className="text-sm">Type 'help' to see commands availables</div>
      )}
      <span className="txt1">RafaelFalk</span>
      <span className="txt2">@</span>
      <span className="txt3"></span>
      <span className="txt4">:$ ~</span>
    </>
  );
}

export default Prompt;
