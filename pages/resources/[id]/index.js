import React from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import axios from 'axios';

const ResourceDetail = ({ resource }) => {
  const activateResource = () => {
    axios
      .patch('/api/resources', { ...resource, status: 'active' })
      .then(() => location.reload())
      .catch(() => alert('Could not activate the resource'));
  };

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
                    <p>Time to finish: {resource.timeToFinish} minutes</p>
                    <Link href={`/resources/${resource.id}/edit`}>
                      <a className="button is-warning mr-3">Update</a>
                    </Link>
                    <button
                      className="button is-success"
                      onClick={activateResource}
                    >
                      Activate
                    </button>
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
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;
