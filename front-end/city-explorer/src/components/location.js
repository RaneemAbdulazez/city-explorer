import React, { Component } from 'react'

class Location extends Component {
  render() {
    let paragraph;

    if (this.props.data) {
      // console.log("----------------------",this.props.data[0].display_name);
      paragraph = <p>{this.props.data[0].display_name}</p>

    } else {
      paragraph = <p></p>
    }



    return (
      <div>
        {paragraph}
      </div>
    )
  }
}

export default Location
