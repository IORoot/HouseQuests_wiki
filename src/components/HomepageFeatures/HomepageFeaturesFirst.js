import React from 'react';


export default function HomepageFeaturesFirst() {

  return (
    <section>
      <div className="container px-32 mb-40">
        <div className="grid grid-cols-2 gap-32">


          <div className="flex flex-col gap-8">
            <img className="h-44"src="img/multisources.svg"></img>
            <div>
              <h3>Multi-Source Properties</h3>
              <p className="text-gray-500">Plot markers on the same map from the premier property websites Zoopla, Rightmove and OnTheMarket to get a complete view of the current market.</p>
              <a className="text-gray-900" href="/">Learn to overlay multiple sources<svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg></a>
            </div>
          </div>


          <div className="flex flex-col gap-8">
            <div className="h-44 rounded-xl overflow-hidden">
              <img className="" src="img/highlight_exclude.gif"></img>
            </div>
            <div>
              <h3>Exclude & Highlight</h3>
              <p className="text-gray-500">Permanently exclude any properties from showing again. Favourite and colour-code the ones you wish to remember and save.</p>
              <a className="text-gray-900" href="/">See how to keep organised<svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

}
