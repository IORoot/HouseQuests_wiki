import React from 'react';


export default function PricingWarning() {

  return (
    <section className="relative bg-gray-100">
      <div className="container px-4 md:px-32 py-32">


        <div className="p-6 w-full bg-white rounded-lg flex flex-col gap-8">
          <h1 className="text-4xl text-center text-gray-500">Purchase as-is.</h1>
          <div className="text-2xl">
            <p>We appreciate your interest in the HouseQuests software. Please note that it is currently a small passion project run by a team with full-time jobs. As such, it may not come with the full support and services you might expect from commercial software.</p>
          
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">Customer support teams.</span> We will do our best to address any issues or bugs, but we don't have a dedicated support team and may not be able to provide individual assistance. We keep the troubleshooting section of our website up to date and welcome bug reports on our <a href="https://github.com/IORoot/HouseQuests/issues/new/choose" target="_blank">GitHub repository</a>.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">3rd party Services.</span> This application is built on multiple third-party APIs and services. If any of these services change or block our application, it may take time to fix or potentially remove the affected feature if a solution cannot be found.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">Stopping services.</span> As mentioned, this is primarily a side project and we may decide to stop development in the future. If this happens, we will give plenty of notice and halt subscriptions.</span>
              </li>
              <li className="flex items-center space-x-3">
                  <span><span className="font-bold">Bugfixes and updates.</span> There are no guarantees of bug fixes or updates. We are actively developing the software as we see fit, but we may decide to stop without obligation.</span>
              </li>
              <li className="flex items-center space-x-3 pt-20">
                  <span>If you have any concerns about these caveats, please don't hesitate to contact us. We recommend trying the free version before making a purchase to ensure that the software meets your needs and expectations.</span>
              </li>
          </ul>
          
          </div>
        </div>

      </div>
    </section>
  );

}
