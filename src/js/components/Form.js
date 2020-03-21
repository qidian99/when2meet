import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScheduleSelector from 'react-schedule-selector'

class Form extends Component {
  constructor() {
    super();
    this.state = { schedule: [] };
  }

  handleChange(newSchedule) {
    this.setState({ schedule: newSchedule })
  }

  render() {
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

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;

