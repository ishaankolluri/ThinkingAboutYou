import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { AppLoading, Font } from 'expo';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'


import Header from './components/header';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'lato-regular': require('./assets/fonts/LatoRegular.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      'lato-black': require('./assets/fonts/Lato-Black.ttf'),
      'lato-light': require('./assets/fonts/Lato-Light.ttf'),
      'lato-hairline': require('./assets/fonts/Lato-Hairline.ttf'),
    });
    this.setState({
      activeTab: this.state.activeTab,
      fontLoaded: true,
    });
  }

  handleTabChange(newTabIndex){
    if(newTabIndex === 0){
      // alert(newTabIndex);      
      this.setState({
        activeTab: 0,
        fontLoaded: true,
      });
    }
    if(newTabIndex === 1){
      // alert(newTabIndex);      
      // Currently not reloading.      
      this.setState({
        activeTab: 1,
        fontLoaded: true,
      })
    }
    if(newTabIndex === 2){
      alert("Settings is an undeveleloped feature.");
    }
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <View>
        <BottomNavigation 
          labelColor="skyblue" 
          rippleColor="black" 
          style={{ height:90, elevation: 8, position: 'absolute', top: 720, left: 0, bottom: 0, right: 0}}
          onTabChange={(newTabIndex) => this.handleTabChange(newTabIndex)}
          shifting="true"
        >
            <Tab
            barBackgroundColor="white"
            label="Home"
            icon={<Icon size={28} color="skyblue" name="home" />}
          />
          <Tab
            barBackgroundColor="white"
            label="Friends"
            icon={<Icon size={28} color="skyblue" name="group" />}
          />
          <Tab
            barBackgroundColor="white"
            label="Settings"
            icon={<Icon size={28} color="skyblue" name="settings" />}
          />
        </BottomNavigation>
        <Header status={this.state.activeTab}/>

      </View>
    );
  }
}
