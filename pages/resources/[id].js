import React from 'react';

import Layout from 'components/Layout';

const ResourceDetail = ({ resource }) => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3003/api/resources/${params.id}`
  );
  const data = await dataRes.json();
  console.log('🚀 ~ getServerSideProps ~ data', data);
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;
