import React from 'react';
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHighlight';
import ResourceList from 'components/ResourceList';

import { resources } from 'api/data';

const Home = () => {
  return (
    <Layout>
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      {JSON.stringify(resources)}
      <Footer />
    </Layout>
  );
};

export default Home;
