import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepagePricing from '@site/src/components/HomepageFeatures/HomepagePricing.js';
import PricingWarning from '@site/src/components/PricingFeatures/PricingWarning.js';
import StripeSubscriptions from '@site/src/components/PricingFeatures/StripeSubscriptions.js';
import StripePortal from '@site/src/components/PricingFeatures/StripePortal.js';
import SubscriptionSuccess from '@site/src/components/PricingFeatures/SubscriptionSuccess.js';


const ProductDisplay = () => (
  <Layout
    title='HouseQuests'
    description="Smart Home Searching">
    <main>
      <HomepagePricing />
      <StripePortal />
      <StripeSubscriptions />
      <PricingWarning />
    </main>
  </Layout>
);

const SuccessDisplay = ({ sessionId }) => {
  return (
    <Layout
      title='HouseQuests'
      description="Smart Home Searching">
      <main>
        <SubscriptionSuccess sessionId={sessionId} />
      </main>
    </Layout>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);




export default function App() {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === '') {
    return <ProductDisplay />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}
