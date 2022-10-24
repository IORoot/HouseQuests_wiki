import React from 'react';


export default function HomepageFeatures() {

  return (
    <section>
      <div className="container px-32 mb-40">
        <div className="grid grid-cols-2 gap-32">


          <div className="flex flex-col gap-8">
            <img className="h-44"src="img/multisources.svg"></img>
            <div>
              <h3>Multi-Source Properties</h3>
              <p className="text-gray-500">Plot markers on the same map from the premier property websites Zoopla, Rightmove and OnTheMarket to get a complete view of the current market.</p>
              <a href="/">Find out more</a>
            </div>
          </div>


          <div className="flex flex-col gap-8">
            <div className="h-44 rounded-xl overflow-hidden">
              <img className="" src="img/highlight_exclude.gif"></img>
            </div>
            <div>
              <h3>Exclude & Highlight</h3>
              <p className="text-gray-500">Permanently exclude any properties from showing again as well as favourite and colour-code the ones you wish to remember and save.</p>
              <a href="/">Find out more</a>
            </div>
          </div>


          <div className="flex flex-col gap-8">
            <div className="h-44 rounded-xl overflow-hidden">
              <img className="" src="img/featured_layers.gif"></img>
            </div>
            <div>
              <h3>Feature Layers</h3>
              <p className="text-gray-500">Overlay important layers on the map. From the London tube map, train stations and national rail to supermarkets, schools and universities.</p>
              <a href="/">Find out more</a>
            </div>
          </div>


          <div className="flex flex-col gap-8">
            <div className="h-44 rounded-xl overflow-hidden">
              <img className="" src="img/local_area.gif"></img>
            </div>
            <div>
              <h3>Local Area</h3>
              <p className="text-gray-500">Discover the area within a 1km radius of the selected property. Get a better neighbourhood view of the surrounding services and amenities.</p>
              <a href="/">Find out more</a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );

}
