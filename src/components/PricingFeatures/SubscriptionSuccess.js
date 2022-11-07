import React from 'react';

export default function SubscriptionSuccess({ sessionId }) {

    return (

        <section className="bg-emerald-900 py-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col gap-4">

                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-100 ">Subscription Success!</h2>
                    <p className="mb-5 font-light text-gray-300 sm:text-xl ">Manage your subscription through the application.</p>
                </div>


                <form className="m-auto"  action="https://138.68.156.78.nip.io/create-portal-session" method="POST">
                    <input
                    type="hidden"
                    id="session-id"
                    name="session_id"
                    value={sessionId}
                    />
                    <button className="border-none hover:cursor-pointer hover:underline text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-orange-400" id="checkout-and-portal-button" type="submit">
                        Click here to see your billing information on stripe.com
                    </button>
                </form>
            </div>
        </section>
    );

}
