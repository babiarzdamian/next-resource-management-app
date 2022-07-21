import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';

const DEFAUTL_DATA = {
  title: '',
  description: '',
  link: '',
  priority: 2,
  timeToFinish: 60,
};

const ResourceCratePage = () => {
  const [form, setForm] = useState(DEFAUTL_DATA);
  const router = useRouter();

  const submitForm = () => {
    axios
      .post('/api/resources', form)
      .then(() => router.push('/'))
      .catch((err) => {
        alert(err.message + '\n' + err?.response?.data);
      });
  };

  const resetForm = () => setForm(DEFAUTL_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add new Resource</h1>
              <form onSubmit={(e) => e.preventDefault}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Learn Next JS"
                      value={form.title}
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Enable the ability to work on more future projects"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="https://academy.code.com"
                      name="link"
                      value={form.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="priority"
                        value={form.priority}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name="timeToFinish"
                      value={form.timeToFinish}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="help">Time in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      type="button"
                      onClick={submitForm}
                      className="button is-link"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="button is-link is-light"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCratePage;
