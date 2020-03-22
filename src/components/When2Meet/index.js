import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScheduleSelector from 'react-schedule-selector'

class When2Meet extends Component {
  constructor() {
    super();
    this.state = { schedule: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newSchedule) {
    this.setState({ schedule: newSchedule })
  }

  render() {
    // setInterval(() => {
    //   console.log('hahahaha');
    // }, 1000);
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={8}
        maxTime={22}
        onChange={this.handleChange}
      />
    )
  }
}

export default When2Meet;

const wrapper = document.getElementById("container");
const text = wrapper.getAttribute("data-text");
console.log(text);
wrapper ? ReactDOM.render(<When2Meet />, wrapper) : false;

