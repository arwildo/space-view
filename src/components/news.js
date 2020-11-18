import React from 'react';
import axios from 'axios';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

import MoonBG from './assets/img/moonbg.png';
import NasaIcon from './assets/img/nasaicon.png';

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
                <img className="w-full" src={article.url}></img>
                <div className="mb-8 mt-4">
                  <p className="text-sm text-grey-dark flex items-center">
                    <img className="w-5 h-5 mr-2" src={NasaIcon}>
                    </img>
                    Space News of the Day
                  </p>
                  <div className="text-black font-bold text-xl mb-2">{article.title}</div>
                  <p className="text-grey-darker text-base">{article.explanation}</p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src={article.url}></img>
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
