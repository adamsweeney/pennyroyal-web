import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const style = {
  margin: 12,
};

export default class App extends Component {
  render() {
    return (
      <div>
        <TextField hintText="Microsoft" floatingLabelText="Stock Name" />
        <RaisedButton label="Default" secondary style={style} />
        <input type="text" />
      </div>
    );
  }
}
