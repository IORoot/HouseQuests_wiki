import React from 'react';


export default function StripeSubscriptions() {

  return (
    <section className="relative bg-gray-800">
      <div className="container px-4 md:px-32 py-32">


        <div className="p-6 w-full text-white rounded-lg flex flex-col gap-8">
          <h1 className="text-7xl text-center text-blue-500">We use Stripe.com</h1>
          <div className="text-2xl">
            <p>Stripe is the industry leader when it comes to payment processing. Used by the biggest industry companies and banks (Deliveroo, ASOS, H&M, Monzo, etc...) you can be sure that your banking details and account is safe and secure.</p>
            <p className='text-center'><a href="https://stripe.com" target="_blank">stripe.com</a></p>
          </div>
        </div>

      </div>
    </section>
  );

}
