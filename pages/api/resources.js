import axios from 'axios';

const resources = async (req, res) => {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3003/api/resources');
    const data = await dataRes.json();

    return res.send(data);
  }

  if (req.method === 'POST' || req.method === 'PATCH') {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send('Data is missing');
    }

    const url =
      req.method === 'POST'
        ? 'http://localhost:3003/api/resources'
        : `http://localhost:3003/api/resources/${id}`;

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiosRes.data);
    } catch (error) {
      return res.status(422).send('Data cannot be stored');
    }
  }
};

export default resources;
