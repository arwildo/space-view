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
            <iframe src={getMapsUrl()} className="w-full h-full"/>
          </div>
				)}
			</Transition>
		</div>
	);
};

export default Maps;
