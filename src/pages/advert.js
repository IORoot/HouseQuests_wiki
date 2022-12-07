import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import AdvertPricing from '@site/src/components/AdvertFeatures/AdvertPricing.js';
import SubscriptionSuccess from '@site/src/components/PricingFeatures/SubscriptionSuccess.js';


const ProductDisplay = () => (
      <AdvertPricing />
);


export default function App() {
  return <ProductDisplay />;
}
