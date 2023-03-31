import React from 'react';
import TerminalOutput from './TerminalOutput';
import Commands from './Commands';
import Prompt from './Prompt';

function Terminal() {
  const inputText = React.useRef();

  const bottomRef = React.useRef(null);

  const [terminalOutput, onEnter] = Commands();

  React.useEffect(() => {
    inputText.current.value = '';
  });

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutput]);

  function refocus() {
    inputText.current.focus();
  }

  return (
    <section className="terminal-section flex flex-col items-center">
      <div className="text-xl font-semibold sm:text-2xl mb-10" id="AboutMe">
        About Me
      </div>
      <div className="w-1/2 h-1/2 shadow-md shadow-neutral-950 p-5 rounded-xl dark:bg-gray dark:text-gray-100 overflow-y-auto mobile:w-3/4">
        <div onClick={refocus}>
          <TerminalOutput terminalOutput={terminalOutput} />
          <div className="terminal-label">
            <Prompt />
            <input
              ref={inputText}
              type="text"
              className="input"
              autoCorrect="off"
              autoComplete="off"
              onKeyDown={({ target: { value }, key }) => onEnter(value, key)}
            />
          </div>
          {/* <div ref={bottomRef} /> */}
        </div>
      </div>
    </section>
  );
}

export default Terminal;
