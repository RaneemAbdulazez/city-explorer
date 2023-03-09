import React, { Component } from 'react'

class Image extends Component {


    
  render() {

    let image;

    if (this.props.lat && this.props.long) {
        image =
          <img alt="city" src={`https://maps.locationiq.com/v3/staticmap?key=pk.0be26064da5dde341e27bba154945fe5&center=${this.props.lat},${this.props.long}&size=600x600&zoom=8&path=fillcolor:%2390EE90|weight:2|color:blue|17.452945,78.380055|17.452765,78.382026|17.452020,78.381375|17.452045,78.380846|17.452945,78.380055`} ></img>
      }
      else {
        image = ''
      }
  
    return (
      <div>
        {image}
      </div>
    )
  }
}

export default Image
