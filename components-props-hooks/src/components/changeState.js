import React from "react";
 
class changeState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : "Đức"};
  }
  render() {
    return (
      <div>
        <h1>Đây là changeState </h1>
        <p>Tên : {this.state.name}</p>

        <button onClick = {() => {
            this.setState({
                name : this.props.name
            })
        }}>
            Cập nhật thông qua props
        </button>
      </div>
    );
  }
}
export default changeState;