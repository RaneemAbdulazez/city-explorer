import React, { Component } from 'react'
import SearchBar from './components/searchBar';
import Location from './components/location';
import Image from './components/image';
import axios from 'axios';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      city: '',
      data: undefined,
      lat: undefined,
      long: undefined,
      image_url: undefined,
      weather: undefined
    }
  }



  fetchWeatherApi = async (e) => {
    try {

      const weatherPlaceHolder = await axios.get(`http://localhost:3001/weather`);
      this.setState({
        weather: weatherPlaceHolder.data[0].data[0],

      })
    } catch (error) {

    }

  }
  getCity = (e) => {
    e.preventDefault();
    console.log("city: ", e.target.value);

    this.setState({
      city: e.target.value
    })
  }

  fetchApi = async (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    console.log(this.state.city);
    try {
      // console.log("------------", process.env.REACT_APP_CLIENT_WEATHER);
      const req = await axios.get(`https://us1.locationiq.com/v1/search?key=pk.0be26064da5dde341e27bba154945fe5&q&q=${this.state.city}&format=json`)
      this.setState({
        data: req.data,
        lat: req.data[0].lat,
        long: req.data[0].lon,
      })
      console.log("request", req);
    } catch (error) {
      console.log(error);
      alert("something went wrong")

      
    }

  }



  render() {



    let max_temp;
    let min_temp;
    if (this.state.weather) {
      max_temp = <p>app_max_temp  {this.state.weather.app_max_temp}</p>
      min_temp = <p>app_max_temp  {this.state.weather.app_min_temp}</p>


    }







    return (
      <div>

        <SearchBar fetchApi={this.fetchApi} getCity={this.getCity} fetchWeatherApi={this.fetchWeatherApi} />
        <Location data={this.state.data}  />

        <Image lat={this.state.lat} long={this.state.long}/>
        {max_temp}
        {min_temp}


      </div>
    )
  }
}

export default App
