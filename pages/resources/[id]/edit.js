import axios from 'axios';

import Layout from 'components/Layout';
import ResourceForm from 'components/ResourceForm';
import React from 'react';

const ResourceEdit = ({ resource }) => {
  const updateResource = (formData) => {
    axios
      .patch('/api/resources/', formData)
      .then(() => alert('Data has been updated'))
      .catch((err) => {
        alert(err.message + '\n' + err?.response?.data);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div>ResourceEdit - {resource.title}</div>
            <ResourceForm
              initialData={resource}
              onFormSubmit={updateResource}
            />
          </div>
        </div>
      </div>
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

export default ResourceEdit;
