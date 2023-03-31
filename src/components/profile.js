import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import './style/global.css';

export default () => {
  return (
    <div className="flex flex-col justify-center max-w-xl p-6 shadow-md shadow-neutral-950 rounded-xl sm:px-40 dark:bg-gray dark:text-gray-100 animate-fadeInToRight">
      <img
        src="https://media.licdn.com/dms/image/C4E03AQGb6WNLiq30Bw/profile-displayphoto-shrink_800_800/0/1657437527060?e=1685577600&v=beta&t=Ss1CrYq0CFlAqrKqicXbJeFZo37R82s2xdlFplbogxk"
        alt="My linkedin profile picture"
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Rafael Falk</h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-400">
            Web Developer
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          <a
            href="https://github.com/falkrafa"
            target={'_blank'}
            aria-label="GitHub"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400 "
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-falk/"
            target="_blank"
            aria-label="Linkedin"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
