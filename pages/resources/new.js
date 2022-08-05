import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import ResourceForm from 'components/ResourceForm';

const DEFAUTL_DATA = {
  title: '',
  description: '',
  link: '',
  priority: 2,
  timeToFinish: 60,
};

const ResourceCratePage = () => {
  const router = useRouter();
  const createResource = (formData) => {
    axios
      .post('/api/resources', formData)
      .then(() => router.push('/'))
      .catch((err) => {
        alert(err.message + '\n' + err?.response?.data);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onFormSubmit={createResource} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCratePage;
