import React from 'react';

import Logo from './assets/img/logo.png';
import NasaIcon from './assets/img/nasaicon.png';
import GoogleIcon from './assets/img/googleicon.png';
import ReactIcon from './assets/img/reacticon.png';

const About = () => {

	return (
    <div>
      <section className="max-w-screen-xl text-gray-200 bg-gray-900">
        <div className="max-w-6xl mx-auto px-5 py-24 ">
          <div className="text-center mb-20">
            <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
              <img
                className="h-8 w-auto sm:h-10 m-auto"
                src={Logo}
                alt="Space View Logo"
              />
              SpaceV
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Space View is a responsive React web app that design to explore the wonders of space objects like the moon, mars, and the night sky. Built with NASA and Google APIs.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0 p-2">
                    <img className="w-5 h-5" src={NasaIcon}>
                    </img>
                  </div>
                  <div className="flex-grow ">
                    <h2 className=" text-xl title-font font-medium mb-3">NASA API</h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
                    <img className="w-5 h-5" src={GoogleIcon}>
                    </img>
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-medium mb-3">Google API</h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-600 mb-5 flex-shrink-0">
                    <img className="w-5 h-5" src={ReactIcon}>
                    </img>
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-medium mb-3">Responsive Design</h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
