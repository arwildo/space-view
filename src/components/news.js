import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import { Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

import MoonBG from './assets/img/moonbg.png';
import NasaIcon from './assets/img/nasaicon.png';

const News = forwardRef((props, newsRef) => {
  const { name, value, description } = props;

  // Article fetching
  const [article, setArticle] = useState(null);
  const newsApi = "https://api.nasa.gov/planetary/apod?api_key=DrZ0rvpXxkznekZtUtea1GbO2e6chwGx6aC0h6wN";

  // Alternative article
  let date = new Date()
  let yesterday = date.getFullYear() + "-" + date.getMonth()+ "-" + (date.getDate() - 1)
  const newsApiAlternative = newsApi + "&date=" + yesterday;

  const fetchArticle = async() => {
    try {
      const response = await axios.get(newsApi)
      setArticle(response.data)
    }
    catch(err) {
      console.log("Article data for today isn't available yet, displaying article data from yesterday temporarily till it becomes available.")
      const response = await axios.get(newsApiAlternative)
      setArticle(response.data)
    }

  }

  // Curiosity rover fetching
  const [rover, setRover] = useState(null);
  const roverApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=DrZ0rvpXxkznekZtUtea1GbO2e6chwGx6aC0h6wN";

  const fetchRover = async() => {
    const response = await axios.get(roverApi);

    setRover(response.data);
  };

  // Run all fetch
  function runFetch() {
    useEffect(() => {
      fetchArticle();
      fetchRover();
    }, [])
  }
  runFetch();
 
  // Get random img 
  function getDivImg() {
    let image_url = rover.photos[Math.floor(Math.random() * rover.photos.length)].img_src;
    const ret = {
      backgroundImage: "url(" + image_url + ")",
    }

    return ret
  }

	return (
	<div className="sm:flex bg-gray-100" ref={newsRef}>
    <div className="sm:w-1/2">
      <div className="max-w-7xl mx-auto py-8 sm:pl-2 sm:pr-1 lg:pl-4 lg:pr-2">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 pt-5 pb-4 border-xl border-gray-200 sm:px-6">
              <p className="text-sm flex text-grey-dark items-center">
                <img className="w-5 h-5 mr-2" src={NasaIcon}>
                </img>
                Mars Rover Photos
              </p>
              <div className="text-black font-bold text-xl">Mars Surface Images</div>
            </div>
            {rover && 
              <>
                <div className="flex flex-row flex-wrap">
                  <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
                    <div className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" style={getDivImg()}>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-4 px-2">
                    <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                      <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                        <div className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" style={getDivImg()}>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
                        <div className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" style={getDivImg()}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
                    <div className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" style={getDivImg()}>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
                    <div className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" style={getDivImg()}>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 h-32 md:h-48 px-2 mb-2">
                    <div className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" style={getDivImg()}>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div>
    <div className="sm:w-1/2">
      <div className="max-w-7xl mx-auto py-8 sm:pl-1 sm:pr-2 lg:pl-2 lg:pr-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 pt-5 pb-4 border-xl border-gray-200 sm:px-6">
            {article && 
              <>
                <div className="mb-4">
                  <p className="text-sm text-grey-dark flex items-center">
                    <img className="w-5 h-5 mr-2" src={NasaIcon}>
                    </img>
                    Astronomy Picture of the Day
                  </p>
                  <div className="text-black font-bold text-xl">{article.title}</div>
                </div>
                <img className="w-full px-2 mx-auto" src={article.url}></img>
                <p className="text-grey-darker text-base text-justify mt-4 my-4">{article.explanation}</p>
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
	</div>
  );
});

News.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  description: PropTypes.string,
};

News.defaultProps = {
  name: '',
  value: 0,
  description: '',
};

export default News
