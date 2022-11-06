import React, { useState, useEffect } from 'react';

export default function HomepagePricing() {

    return (

        <section className="bg-emerald-900 py-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">


                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-5xl md:text-9xl tracking-tight font-extrabold text-gray-100 ">Pricing</h2>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-100 ">Something for everyone</h2>
                    <p className="mb-5 font-light text-gray-300 sm:text-xl ">Here at HouseQuests we focus on making life easier to track down that perfect property.</p>
                </div>


                <form action="http://138.68.156.78/create-checkout-session" method="POST">
                
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">



                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full xl:p-8 ">
                            <h3 className="mb-4 text-2xl font-semibold">Free</h3>
                            <p className="font-light text-gray-500 sm:text-lg ">Best for getting started.<br />Ad-supported.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">£0</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>99% of features.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>Supported by adverts</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>Devices: <span className="font-semibold">1 device</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>Access latest version</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                                    <span>No saves or Import / Export</span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-orange-400">Download</a>
                        </div>



                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full xl:p-8 ">
                            <h3 className="mb-4 text-2xl font-semibold">Subscription</h3>
                            <p className="font-light text-gray-500 sm:text-lg ">Fully-featured application.<br />No adverts.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">£9</span>
                                <span className="text-gray-500 ">/month</span>
                            </div>

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
                                    <span>Devices: <span className="font-semibold">3 devices</span></span>
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
                            <input type="hidden" name="lookup_key" value="subscription" />
                            <button className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-orange-400" id="checkout-and-portal-button" type="submit">
                                Subscribe
                            </button>

                        </div>




                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full xl:p-8 ">
                            <h3 className="mb-4 text-2xl font-semibold">Purchase</h3>
                            <p className="font-light text-gray-500 sm:text-lg ">Own the application completely <br />without a subscription.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">£199</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>Complete functionality</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>No authorisation</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>Devices: <span className="font-semibold">5 devices</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>No adverts or nag-screens</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span>Yours forever</span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-orange-400">Purchase</a>
                        </div>
                    </div>
                </form>
                
            </div>
        </section>
    );

}
