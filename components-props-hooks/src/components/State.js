import React from "react";
 
class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : "Đức"};
  }
  render() {
    return (
      <div>
        <h1>Đây là state </h1>
        <p>Tên : {this.state.name}</p>

        <button onClick = {() => {
            this.setState({
                name : 'Dương'
            })
        }}>
            Cập nhật tên 
        </button>
      </div>
    );
  }
}
export default State;