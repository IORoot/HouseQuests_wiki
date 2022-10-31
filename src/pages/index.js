import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeaturesFirst from '@site/src/components/HomepageFeatures/HomepageFeaturesFirst.js';
import HomepageFeaturesSecond from '@site/src/components/HomepageFeatures/HomepageFeaturesSecond.js';
import HomepageFeaturesTop from '@site/src/components/HomepageFeatures/HomepageFeaturesTop.js';
import HomepageMultiOS from '@site/src/components/HomepageFeatures/HomepageMultiOS.js';
import HomepageVideo from '@site/src/components/HomepageFeatures/HomepageVideo.js';
import HomepagePricing from '@site/src/components/HomepageFeatures/HomepagePricing.js';
import HomepageBlogList from '@site/src/components/HomepageFeatures/HomepageBlogList.js';
import HomepageLatestVersion from '@site/src/components/HomepageFeatures/HomepageLatestVersion.js';
import ApplicationWindow from '@site/src/components/HomepageFeatures/ApplicationWindow.js';

const RandomMarkers = function(){
  let content = [];
  for (let step = 0; step < 50; step++) {
    var colours = ['fill-red-500', 'fill-cyan-500', 'fill-purple-500']
    let randomX = Math.floor(Math.random() * 100) + 1 + '%'
    let randomY = Math.floor(Math.random() * 100) + 1 + '%'
    let randomColour = colours[Math.floor(Math.random()*colours.length)];
    let randomDuration = Math.random() * 2.5 + 's'
    let classes = randomColour + ' w-4 h-4 absolute animate fadeInFromTop'

    content.push(<svg key={step} className={classes} style={{top: randomX, left: randomY, animationDuration: randomDuration}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/></svg>);
  }
  return content;
};


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="text-gray-900 pt-12 md:pt-24 relative mb-40 overflow-hidden">
      <div className="container lg:w-2/3 m-auto text-center flex flex-col gap-8 perspective z-10 relative">
        <h1 className="text-4xl md:text-7xl">Track down the perfect property</h1>
        <p className="text-lg text-gray-500 md:w-1/2 m-auto">A new cross-platform, property app for searching across multiple sources. Search, analyse and organise. </p>
        <div className="flex flex-row gap-4 mx-auto mb-20">
          <Link to="/downloads" className="text-white bg-emerald-700 hover:bg-emerald-800 hover:text-orange-300 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
              Downloads
              <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
          </Link>
          <Link to="/pricing" className="text-emerald-700 border-solid border border-emerald-700 hover:bg-emerald-800 hover:text-orange-300 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Pricing
          </Link>
        </div>

        <ApplicationWindow>
          <div className="bg-emerald-900 w-8 h-8 top-2 left-2 p-1 z-20 absolute fill-white rounded">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.25,12C17.25,12.23 17.23,12.46 17.2,12.68L18.68,13.84C18.81,13.95 18.85,14.13 18.76,14.29L17.36,16.71C17.27,16.86 17.09,16.92 16.93,16.86L15.19,16.16C14.83,16.44 14.43,16.67 14,16.85L13.75,18.7C13.72,18.87 13.57,19 13.4,19H10.6C10.43,19 10.28,18.87 10.25,18.7L10,16.85C9.56,16.67 9.17,16.44 8.81,16.16L7.07,16.86C6.91,16.92 6.73,16.86 6.64,16.71L5.24,14.29C5.15,14.13 5.19,13.95 5.32,13.84L6.8,12.68C6.77,12.46 6.75,12.23 6.75,12C6.75,11.77 6.77,11.54 6.8,11.32L5.32,10.16C5.19,10.05 5.15,9.86 5.24,9.71L6.64,7.29C6.73,7.13 6.91,7.07 7.07,7.13L8.81,7.84C9.17,7.56 9.56,7.32 10,7.15L10.25,5.29C10.28,5.13 10.43,5 10.6,5H13.4C13.57,5 13.72,5.13 13.75,5.29L14,7.15C14.43,7.32 14.83,7.56 15.19,7.84L16.93,7.13C17.09,7.07 17.27,7.13 17.36,7.29L18.76,9.71C18.85,9.86 18.81,10.05 18.68,10.16L17.2,11.32C17.23,11.54 17.25,11.77 17.25,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M12,10C10.89,10 10,10.89 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,10.89 13.1,10 12,10Z"/></svg>
          </div>
          <RandomMarkers></RandomMarkers>
          <img className="w-full" src="img/london.jpg"></img>  
        </ApplicationWindow>
      </div>

      <svg className="absolute top-40 left-1/2 right-1/2 h-40 md:h-80 lg:h-128 opacity-20 z-0 fill-orange-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"/></svg>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='HouseQuests'
      description="Smart Home Searching">
      <HomepageHeader />
      <main>
        <HomepageFeaturesFirst />
        <HomepageMultiOS />
        <HomepageFeaturesSecond />
        <HomepageVideo />
        <HomepageFeaturesTop />
        <HomepagePricing />
        <HomepageBlogList />
        <HomepageLatestVersion />
      </main>
    </Layout>
  );
}
