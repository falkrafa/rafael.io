import React from 'react';
import { Link } from 'react-scroll';

export default () => {
  return (
    <div className="absolute w-full flex p-6 justify-center items-center">
      <div className="w-1/2 dark:bg-gray-500 p-4 flex justify-around items-center">
        <ul className="flex bg-white w-1/2 justify-around items-center">
          <li>
            <Link
              to="AboutMe"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link to="" smooth={true} duration={500} className="cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link to="" smooth={true} duration={500} className="cursor-pointer">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
