import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepagePricing from '@site/src/components/HomepageFeatures/HomepagePricing.js';
import PricingWarning from '@site/src/components/PricingFeatures/PricingWarning.js';

export default function Pricing() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='HouseQuests'
      description="Smart Home Searching">
      <main>
        <HomepagePricing/>
        <PricingWarning />
      </main>
    </Layout>
  );
}
