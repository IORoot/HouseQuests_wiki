import React from 'react';


export default function StripePortal() {

  return (
    <section className="relative ">
      <div className="container px-4 md:px-32 py-32">


        <div className="p-6 w-full bg-white rounded-lg flex flex-col gap-8">
          <h1 className="text-4xl text-center text-emerald-800">Already have a subscription?</h1>
          <div className="text-2xl text-center ">
            <a className="text-emerald-700" href="https://billing.stripe.com/p/login/test_28o01s1QKgp6cjS145" target="_blank" >Stripe Subscription Portal
              <svg className="w-4 h-4 ml-4" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>
            <p className="text-gray-400 text-sm mt-4">Manage your subscription, update your payment method or cancel your account.</p>
          </div>
        </div>

      </div>
    </section>
  );

}
