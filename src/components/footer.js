import React from 'react';

import Logo from './assets/img/logo.webp';

const Footer = (props) => {
	function getYear() {
		return new Date().getFullYear();
	}

	return (
    <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          Join 31,000+ other and never <br />miss out on space news.
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input type="email" className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email" />
              <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a href="#" className="text-xl font-bold">
              <img className="w-8" src={Logo} />
            </a>
          </div>
          <div>
            <p className="text-sm m-3">
              <a href="https://arwildo.com">Arwildo</a> &copy; {getYear()}
            </p>
          </div>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <a className="cursor-pointer px-4 text-sm" onClick={props.scrollToAbout}>About</a>
                <a className="cursor-pointer px-4 text-sm" onClick={props.scrollToNews}>News</a>
                <a href="https://arwildo.com" className="px-4 text-sm" target="_blank">Contact</a>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
