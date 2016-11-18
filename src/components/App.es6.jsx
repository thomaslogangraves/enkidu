import React from 'react';
import { Link } from 'react-router';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      edaStDev: [],
      hrStDev: [],

    }
  }
  render() {
    return(
      <div>
        <h1> Hello </h1>
      </div>
    )
  }
}
