import React, { useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Logo from './assets/img/logo.png';
import MoonBG from './assets/img/moonbg.png';
import MarsBG from './assets/img/marsbg.png';
import SkyBG from './assets/img/skybg.png';
import MoonIcon from './assets/img/moon.png';
import MarsIcon from './assets/img/mars.png';
import SkyIcon from './assets/img/sky.png';

import Maps from './maps'

export default function(props) {
  // Landing
	const [ isOpen, setIsOpen ] = useState(false);

  const slideRef = useRef();
  const properties = {
    arrows: false,
    pauseOnHover: false
  };
  const autoplay = true;


  // Maps 
	const [ mapsOpen, setMapsOpen ] = useState(false);
	const [ moonOpen, setMoonOpen ] = useState(false);
	const [ marsOpen, setMarsOpen ] = useState(false);
	const [ skyOpen, setSkyOpen ] = useState(false);

  // Maps runner funcs
	function runMoonMap() {
	  setMapsOpen(true);
	  setMoonOpen(true);
	}
	function runMarsMap() {
	  setMapsOpen(true);
	  setMarsOpen(true);
	}
	function runSkyMap() {
	  setMapsOpen(true);
	  setSkyOpen(true);
	}

	return (
		<div className="max-w-screen-xl relative bg-white overflow-hidden">
			<div className="mx-auto">
				<div className="relative z-10 pb-8 bg-gray-200 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-56 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-200 transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>
					<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
						<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
							<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
								<div className="flex items-center justify-between w-full md:w-auto">
									<a href="#" aria-label="Home">
										<img
											className="h-8 w-auto sm:h-10"
											src={Logo}
                      alt="Space View Logo"
										/>
									</a>
									<div className="-mr-2 flex items-center md:hidden">
										<button
											type="button"
											className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
											id="main-menu"
											aria-label="Main menu"
											aria-haspopup="true"
											onClick={() => setIsOpen(true)}
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
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="hidden md:block md:ml-10 md:pr-4">
								<a
									className="cursor-pointer font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
									onClick={props.scrollToNews}
								>
									News
								</a>
								<a
									className="cursor-pointer ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
									onClick={props.scrollToAbout}
								>
									About
								</a>
								<a
									href="https://api.nasa.gov/"
									className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
									rel="nofollow"
								>
									Nasa API
								</a>
								<a
									href="https://developers.google.com/maps/documentation"
									className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
									rel="nofollow"
								>
									Google API
								</a>
								<a
									href="https://arwildo.com"
									className="ml-8 font-medium text-blue-500 hover:text-blue-900 transition duration-150 ease-in-out"
								>
									Author
								</a>
							</div>
						</nav>
					</div>

					<Transition
						show={isOpen}
						enter="transition ease-out duration-100 transform"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="transition ease-in duration-75 transform"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>

						{isOpen && (
							<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
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
													onClick={() => setIsOpen(false)}
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
											<a
												className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
                        onClick={props.scrollToNews}
											>
												News
											</a>
											<a
												className="cursor-pointer mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
                        onClick={props.scrollToAbout}
											>
												About
											</a>
											<a
                        href="https://api.nasa.gov/"
												className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
                        rel="nofollow"
											>
												Nasa API
											</a>
											<a
                        href="https://developers.google.com/maps/documentation"
												className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
                        rel="nofollow"
											>
												Google API
											</a>
										</div>
										<div>
											<a
												href="https://arwildo.com"
												className="block w-full px-5 py-3 text-center font-medium text-blue-500 bg-gray-50 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:bg-gray-100 focus:text-blue-600 transition duration-150 ease-in-out"
												role="menuitem"
											>
												Author
											</a>
										</div>
									</div>
								</div>
							</div>
						)}
					</Transition>

					<main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
								Map to view
								<br />
								<span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-teal-400 font-black">Space objects</span>
							</h2>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Web app to explore the wonders of space objects like moon, mars, and the night sky. 
                Built with Nasa and Google APIs.
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-500 bg-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-400 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
										onClick={() => runMoonMap()}
									>
										<img className="w-6 mr-3" src={MoonIcon} />
										Moon
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-500 bg-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-400 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
										onClick={() => runMarsMap()}
									>
										<img className="w-6 mr-3" src={MarsIcon} />
										Mars
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-500 bg-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-400 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
										onClick={() => runSkyMap()}
									>
										<img className="w-6 mr-3" src={SkyIcon} />
										Sky
									</a>
								</div>
							</div>
						</div>
					</main>
          <Maps mapsOpen={mapsOpen} setMapsOpen={setMapsOpen}
                moonOpen={moonOpen} setMoonOpen={setMoonOpen} 
                marsOpen={marsOpen} setMarsOpen={setMarsOpen}
                skyOpen={skyOpen} setSkyOpen={setSkyOpen}
          />
				</div>
			</div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full">
        <Slide autoplay={autoplay} ref={slideRef} {...properties}>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full xl:h-full"
            src={MoonBG}
          />
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full xl:h-full"
            src={MarsBG}
          />
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full xl:h-full"
            src={SkyBG}
          />
        </Slide>
      </div>
      
		</div>
	);
}
