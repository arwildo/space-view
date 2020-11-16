import React from 'react';
import { Transition } from '@headlessui/react';

const News = () => {
	return (
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6 bg-white">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <p class="text-xl leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Read 
              <span class="text-blue-500"> NASA </span>
              article of the day.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company_website" class="block text-sm font-medium leading-5 text-gray-700">
                    Website
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      http://
                    </span>
                    <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="www.example.com" />
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <label for="about" class="block text-sm leading-5 font-medium text-gray-700">
                  About
                </label>
                <div class="rounded-md shadow-sm">
                  <textarea id="about" rows="3" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="you@example.com"></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
