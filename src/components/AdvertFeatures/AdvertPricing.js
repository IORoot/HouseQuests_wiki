import React from 'react';

export default function HomepagePricing() {

    return (

        <section className="bg-emerald-900 py-12">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <form action="https://138.68.156.78.nip.io/create-checkout-session" method="POST">
                
                    <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full xl:p-8 ">
                            <h2 className="mb-4 text-5xl md:text-7xl tracking-tight font-extrabold text-emerald-900 ">Pricing</h2>
                            <h3 className="mb-4 text-2xl font-semibold">Subscription</h3>
                            <p className="font-light text-gray-500 sm:text-lg ">Fully-featured application.<br />No adverts or pop-up.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">£4</span>
                                <span className="text-gray-500 ">/month</span>
                            </div>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full xl:p-8 ">
                            
                            <div className='my-auto'>
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Fully Featured</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>No adverts or nag-screens</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Multiple Saves. Import / Export</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Access latest version</span>
                                    </li>
                                </ul>
                            
                                {/* Add a hidden field with the lookup_key of your Price */}
                                <input type="hidden" name="lookup_key" value="subscription_monthly" />
                                <a id="advert-link" href="https://housequests.com/pricing" className="border-none hover:cursor-pointer hover:underline text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-orange-400" id="checkout-and-portal-button" type="submit">
                                    Start Today
                                </a>
                            </div>

                        </div>

                    </div>
                </form>
                
            </div>
        </section>
    );

}
