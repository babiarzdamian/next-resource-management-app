import Link from 'next/link';
import React from 'react';

const ActiveResource = () => {
  return (
    <div className="active-resource">
      <h1 className="resource-name">Active resource</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">1000 s</h2>
      </div>
      <Link href="/">
        <a className="button">Go to resource</a>
      </Link>
    </div>
  );
};

export default ActiveResource;
