import React from 'react';
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHighlight';
import ResourceList from 'components/ResourceList';

const Home = ({ resources }) => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 1)} />
      <Newsletter />
      <ResourceList resources={resources.slice(1)} />
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps() {
  const resData = await fetch('http://localhost:3003/api/resources');
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
