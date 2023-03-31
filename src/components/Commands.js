import React, { useState } from 'react';

const commands = {
  help: 'Commands: whoami\n\nprojects\n\nclear',
  whoami: `My name is Rafael and I'm currently studying Computer Science at Escola Cesar. I'm passionate about web development and starting to like security`,
  projects: 'Nada ainda',
};

const notFound = "Command not found. Try 'help' to get started";

const UseOnEnter = () => {
  const [terminalOutput, setTerminalOutput] = React.useState([]);

  const onEnter = (value, key) => {
    if (key === 'Enter') {
      if (value === 'clear') {
        return setTerminalOutput([]);
      }

      const newTerminalLine = commands[value] || notFound;
      return setTerminalOutput((terminalOutput) =>
        terminalOutput.concat(newTerminalLine)
      );
    }
  };

  return [terminalOutput, onEnter];
};

export default UseOnEnter;
