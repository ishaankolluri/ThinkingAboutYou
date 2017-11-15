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
      status: "home",
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
      status: this.state.status,
      fontLoaded: true,
    });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <View>
        <Header status={this.state.status}/>

        <BottomNavigation 
          labelColor="white" 
          rippleColor="white" 
          style={{ height:56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0}}
          onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
        >
            <Tab
            barBackgroundColor="#37474F"
            label="Home"
            icon={<Icon size={24} color="white" name="home" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Friends"
            icon={<Icon size={24} color="white" name="group" />}
          />
          <Tab
            barBackgroundColor="#5D4037"
            label="Settings"
            icon={<Icon size={24} color="white" name="settings" />}
          />
        </BottomNavigation>
      </View>
    );
  }
}
