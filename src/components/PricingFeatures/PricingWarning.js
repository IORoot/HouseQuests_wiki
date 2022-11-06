import React from 'react';


export default function PricingWarning() {

  return (
    <section className="relative bg-red-800">
      <div className="container px-4 md:px-32 py-32">


        <div className="p-6 w-full bg-white rounded-lg flex flex-col gap-8">
          <h1 className="text-7xl text-center text-red-800">WARNING</h1>
          <div className="text-2xl">
            <p>We wish to be completely open to you with the HouseQuests software. It is currently a passion-project run on the side by a couple of people who have full-time jobs and are making it available to the public.</p>
            <p>Therefore, this application does <span className="text-red-500 font-bold">NOT</span> come with the following things that you would normally expect with software:</p>
          
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>
                  <span><span className="font-bold">Customer support.</span> We do not have a support team and cannot help with any issues or bugs. We keep the troubleshooting section of this website as accurate as possible - please refer to that for any issues.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>
                  <span><span className="font-bold">3rd party Services.</span> This application is built upon multiple third-party APIs and services - if any of those services change or block this application, it will take time to fix or potentially remove that feature if a solution cannot be found.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>
                  <span><span className="font-bold">Stopping services.</span> As mentioned above, this is primarily run by a couple of people and we may decide that we wish to walk away from continuing development. In such an event, notices will be made and subscriptions will be halted. Purchases will not be refunded.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>
                  <span><span className="font-bold">Bugfixes and updates.</span> There are no guaranteed bug-fixes or updates.</span>
              </li>
              <li className="flex items-center space-x-3 pt-20">
                  <span>If you have ANY issues with these caveats, then please do not purchase this software. We advise to try the free version before you make any purchase to avoid any issues or disappointment.</span>
              </li>
          </ul>
          
          </div>
        </div>

      </div>
    </section>
  );

}
