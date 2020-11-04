import React from 'react';
import { Transition } from '@headlessui/react';
import Iframe from 'react-iframe';

import Logo from './assets/img/logo.png';

const Maps = params => {

	function getMapsUrl() {
	  const mapsUrls = ["https://arwildo.com/iframes/moon"]

	  return mapsUrls[0]
	}

	return (
    <div>
      <Transition
        show={params.mapsOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {params.mapsOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-center w-screen max-w-screen-xl">
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={Logo}
                      alt="Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                      onClick={() => {params.setMapsOpen(false)}}
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">

                <Iframe url={getMapsUrl()}
                        id="myId"
                        height="450px"
                        className="w-full"
                        display="initial"
                        position="relative"/>

                </div>
                <div>
                  <a
                    className="block w-full px-5 py-3 text-center font-medium text-blue-500 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-600 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Moon
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  )
}

export default Maps
