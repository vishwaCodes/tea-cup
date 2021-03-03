import React, { Component } from 'react';
import TeaModel from '../models/Tea';
import Teas from '../components/Teas';

class TeaContainer extends Component {

  constructor() {
    super();
    this.state = {
      teas: [],
    };
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    TeaModel.all().then((res) => {
      this.setState({
        teas: res.data,
      });
    });
  };

  render() {
    return (
      <div className="teasComponent">
        <Teas 
          teas={this.state.teas}
        />
      </div>
    );
  };
};

export default TeaContainer;