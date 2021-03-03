import React from 'react';
import axios from 'axios';

import Teas from '../components/Teas';

// const TeaData = [];
// for (let i = 0; i < 20; i++) {
//   TeaData.push({
//     name: '',
//     description: ''
//   });
// }


const TeaData = () => {
  for (let i = 0; i < 20; i++) {
    TeaData.push({
      name: '',
      description: ''
    });
}
};

class TeaList extends React.Component {
  state = {
    teas: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/teas/')
      .then(res => {
        this.setState({
          teas: res.data
        });
        console.log(res.data);
      })
  }

  render() {
    return (
      <Teas data={TeaData} />
    )
  };
};

export default TeaList;