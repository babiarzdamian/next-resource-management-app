import React, { useState } from 'react';

const ResourceForm = ({ initialData, onFormSubmit }) => {
  const DEFAUTL_DATA = {
    title: '',
    description: '',
    link: '',
    priority: 2,
    timeToFinish: 60,
  };

  const [form, setForm] = useState(initialData || DEFAUTL_DATA);

  const resetForm = () => setForm(initialData || DEFAUTL_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = () => {
    onFormSubmit(form);
  };

  return (
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
  );
};

export default ResourceForm;
