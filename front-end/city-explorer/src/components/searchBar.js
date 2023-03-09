import React, { Component } from 'react'

class SearchBar extends Component {



 
    render() {
        return (
            <div>
                <form onSubmit={this.props.fetchApi} >
                    <input onChange={this.props.getCity} type="text" placeholder='enter a city'></input>
                    <button onClick={this.props.fetchWeatherApi} type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBar
