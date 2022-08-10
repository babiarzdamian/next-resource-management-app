import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import moment from 'moment';

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const fetchresource = async () => {
      const axiosRes = await axios.get('/api/activeresource');
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish);
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        'seconds'
      );

      const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    };
    fetchresource();
  }, []);

  useEffect(() => {
    /**
     * @todo find better way to implement second-by-second interval (without re-creating setInterval every second)
     */
    const interval = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearTimeout(interval);
    }

    return () => clearTimeout(interval);
  }, [seconds]);

  const hasResource = resource && resource.id;
  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resource.title : 'No resource active...'}
      </h1>
      <div className="time-wrapper">
        {hasResource &&
          (seconds > 0 ? (
            <h2 className="elapsed-time">{seconds}</h2>
          ) : (
            <h2 className="elapsed-time">
              <button className="button is-success">Click and Done!</button>
            </h2>
          ))}
      </div>
      {hasResource ? (
        <Link href={`/resources/${resource.id}`}>
          <a className="button">Go to resource</a>
        </Link>
      ) : (
        <Link href={`/`}>
          <a className="button">Go to resources</a>
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
