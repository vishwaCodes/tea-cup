import React, { Component } from 'react';
import TeaModel from '../models/Tea';
import TeasList from '../components/TeasList';

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
        <TeasList 
          teas={this.state.teas}
        />
      </div>
    );
  };
};

export default TeaContainer;