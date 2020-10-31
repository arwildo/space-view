import React from 'react';
import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Logo from './assets/img/logo.png';
import Moon from './assets/img/moon.png';
import MoonBG from './assets/img/moonbg.png';
import MarsBG from './assets/img/marsbg.png';
import SkyBG from './assets/img/skybg.png';

export default function() {
  
	const [ isOpen, setIsOpen ] = useState(false);
	return (
		<div className="relative bg-white overflow-hidden">
			<div className="max-w-screen-xl mx-auto">
				<div className="relative z-10 pb-8 bg-gray-200 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
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
											alt="Logo"
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
									href="#"
									className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									News
								</a>
								<a
									href="#"
									className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									About
								</a>
								<a
									href="#"
									className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Nasa API
								</a>
								<a
									href="#"
									className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Google API
								</a>
								<a
									href="#"
									className="ml-8 font-medium text-blue-500 hover:text-blue-900 transition duration-150 ease-in-out"
								>
									Author
								</a>
							</div>
						</nav>
					</div>

					{/*
          Mobile menu, show/hide based on menu open state.
          Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
          */}

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
												href="#"
												className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
											>
												News
											</a>
											<a
												href="#"
												className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
											>
												About
											</a>
											<a
												href="#"
												className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
											>
												Nasa API
											</a>
											<a
												href="#"
												className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
												role="menuitem"
											>
												Google API
											</a>
										</div>
										<div>
											<a
												href="#"
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
								<br className="xl:hidden" />
								<span className="text-blue-500">Space objects</span>
							</h2>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Web app to explore the wonders of space objects like moon, mars,and night sky. 
                Built with Nasa and Google APIs.

							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-400 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
									>
										Moon
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-400 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
									>
										Mars
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-400 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
									>
										Sky
									</a>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					src={MarsBG}
				/>
			</div>
		</div>
	);
}
