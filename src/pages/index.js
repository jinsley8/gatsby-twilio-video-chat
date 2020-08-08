import React from 'react';
import Layout from '../components/layout';
import Join from '../components/join';

export default ({ location }) => (
  <Layout>
    <Join location={location} />
  </Layout>
);
