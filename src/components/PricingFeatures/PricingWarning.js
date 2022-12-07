import React from 'react';


export default function PricingWarning() {

  return (
    <section className="relative bg-gray-100">
      <div className="container px-4 md:px-32 py-32">


        <div className="p-6 w-full bg-white rounded-lg flex flex-col gap-8">
          <h1 className="text-7xl text-center text-amber-800">CAVEATS</h1>
          <div className="text-2xl">
            <p>We wish to be completely open to you with the HouseQuests software. It is currently a small passion-project run on the side who have full-time jobs and are making it available to the public.</p>
            <p>Therefore, this application does not come with the following things that you would normally expect with full software:</p>
          
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">Customer support teams.</span> We try our best to get to fix any real problems or bugs, but we do not have a proper support team and cannot help with any individual issues or bugs you may have. We keep the troubleshooting section of this website as accurate as possible and you can file a bug report over on our <a href="https://github.com/IORoot/HouseQuests/issues/new/choose" target="_blank">GitHub repository</a>.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">3rd party Services.</span> This application is built upon multiple third-party APIs and services - if any of those services change or block the application, it will take time to fix or potentially remove that feature if a solution cannot be found or resolved.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">Stopping services.</span> As mentioned above, this is primarily run as a small side-project and we may decide that we wish to walk away from continuing development. In such an event, plenty of notice will be made and the subscriptions will be halted.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">Bugfixes and updates.</span> There are no guaranteed bug-fixes or updates. We are actively developing the software as we see fit, but we are placing no obligation on ourselves if we decide to stop.</span>
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
