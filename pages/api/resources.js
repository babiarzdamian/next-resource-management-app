import axios from 'axios';

const resources = async (req, res) => {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3003/api/resources');
    const data = await dataRes.json();

    return res.send(data);
  }

  if (req.method === 'POST') {
    const { title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send('Data is missing');
    }

    axios.post('http://localhost:3003/api/resources', req.body);

    return res.send('Data received');
  }
};

export default resources;
