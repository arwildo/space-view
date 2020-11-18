import React from 'react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

import MoonBG from './assets/img/moonbg.png';
import axios from 'axios';

const News = () => {

  const [article, setArticle] = useState(null);
  const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=DrZ0rvpXxkznekZtUtea1GbO2e6chwGx6aC0h6wN";

  const fetchData = async() => {
    const response = await axios.get(apiUrl)

    setArticle(response.data)
  }
  fetchData()

	return (
    <div className="max-w-screen-xl bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-xl border-gray-200 sm:px-6">
            {article && 
              <>
                <img className="w-full" src={article.hdurl}></img>
                <div className="mb-8 mt-4">
                  <p className="text-sm text-grey-dark flex items-center">
                    <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Space News of the Day
                  </p>
                  <div className="text-black font-bold text-xl mb-2">{article.title}</div>
                  <p className="text-grey-darker text-base">{article.explanation}</p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src={article.hdurl}></img>
                  <div className="text-sm">
                    <p className="text-black leading-none">{article.copyright}</p>
                    <p className="text-grey-dark">{article.date}</p>
                  </div>
                </div>
              </>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
