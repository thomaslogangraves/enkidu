import React from 'react';
import { Link } from 'react-router';

export default class Application extends React.Component {
  constructor(){
    super();
    this.state = {
      fileHr: "./HR.csv",
      fileEda: "./EDA.csv",
      stDevHr: "",
      stDevEda: ""
    }
  }
  render() {
    const {fileHr, fileEda} = this.state
    return(
      <div>
        <h1> {fileHr} and {fileEda}</h1>
      </div>
    )
  }
}
