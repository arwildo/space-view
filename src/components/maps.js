import React from 'react';
import { Transition } from '@headlessui/react';

import Logo from './assets/img/logo.png';

const Maps = (params) => {
	function getMapsUrl() {
		const mapsUrls = [ 'https://arwildo.com/iframes/moon' ];

		return mapsUrls[0];
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
					<div className="absolute shadow-md top-0 h-screen w-screen max-w-screen-xl xl:max-h-full">
            <div className="absolute top-0 right-0 mr-2 mt-3">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none bg-white focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Close map"
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
            <iframe src={getMapsUrl()} className="w-full h-full"/>
          </div>
				)}
			</Transition>
		</div>
	);
};

export default Maps;
