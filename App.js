import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "fab63b98bbd5d1b3d9c16ae9dd76fb1f";

export default class extends React.Component {
  state = {
    isLoading: true
  };


  getWeather = async(latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main, 
      temp
    });
  }
  getLocation = async() => {
    
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //send to api and get weather 
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("can't find you");
    }
    
  }
  
  componentDidMount() {
    this.getLocation();
  }
  render(){
    const {isLoading, condition, temp} = this.state; 
    return isLoading ? <Loading /> : <Weather condition={condition} temp={Math.round(temp)} />;
  }
}

