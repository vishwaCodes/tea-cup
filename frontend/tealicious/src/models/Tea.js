import axios from 'axios';

const endPoint = 'http://localhost:8000/api/teas/';

class TeaModel {
  static all = () => {
    let request = axios.get(endPoint);
    return request;
  };
};

export default TeaModel;