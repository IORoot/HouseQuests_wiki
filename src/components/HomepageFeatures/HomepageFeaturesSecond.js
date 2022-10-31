import React from 'react';


export default function HomepageFeaturesSecond() {

  return (
    <section>
      <div className="container px-4 md:px-8 lg:px-32  mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">

          <div className="flex flex-col gap-8">
            <div className="h-auto rounded-xl overflow-hidden">
              <img className="" src="img/featured_layers.gif"></img>
            </div>
            <div>
              <h3>Feature Layers</h3>
              <p className="text-gray-500">Overlay important layers on the map. From the London tube map, train stations and national rail to supermarkets, schools and universities.</p>
              <a className="text-gray-900" href="/">Discover the power of multiple layers<svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg></a>
            </div>
          </div>


          <div className="flex flex-col gap-8">
            <div className="h-auto rounded-xl overflow-hidden">
              <img className="" src="img/local_area.gif"></img>
            </div>
            <div>
              <h3>Local Area</h3>
              <p className="text-gray-500">Discover the area within a 1km radius of the selected property. Get a better neighbourhood view of the surrounding services and amenities.</p>
              <a className="text-gray-900" href="/">Investigate local features<svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg></a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );

}
