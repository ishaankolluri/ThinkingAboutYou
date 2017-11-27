import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Animated} from 'react-native';

import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';

import homeStyles from './styles/homeStyles';

export default class Neglected extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.sortNeglected(this.props.data).slice(0, 2),
    };
  }

  sortNeglected(unsorted){
    let data = unsorted.slice();
    function compare(obj1, obj2){
      let a = parseInt(obj1.received);
      let b = parseInt(obj2.received);
      return a - b;
    }
    return data.sort(compare);
  }

  handleDelete(index){
    let updated = this.state.data.slice();
    for(let i = 0; i < updated.length; i++){
      if(i === index){
        updated.splice(i, 1);
        break;
      }
    }
    this.setState({
      data: updated
    });
  }

  render(){
    let data = this.state.data;
    if(data.length === 0){
      return (
        <View style={{top: 100}}>
        <Text style={homeStyles.received}>Give them some love!</Text>
        <Text style={homeStyles.emptySet}>No pending thoughts :( </Text>
      </View>
      );
    }
    let rows = data.map((element, index) => {
      const rightButtons = [
        <TouchableHighlight style={homeStyles.swipeLeft}><Icon size={28} color="red" name="delete" onPress={() => this.handleDelete(index)}/></TouchableHighlight>,
      ];
      const leftButtons = [
        <TouchableHighlight style={homeStyles.swipeRight}><Icon size={28} color="skyblue" name="reply" onPress={(index) => alert("Thought sent to " + element.name + "!")}/></TouchableHighlight>,
      ];
      return (
        <Swipeable key={index} style={homeStyles.rowSpacer} leftButtons = {leftButtons} rightButtons={rightButtons}>
          <View style={homeStyles.row}>
            <Text style={homeStyles.rowName}>{element.name}</Text>
            <Text style={homeStyles.rowThoughts}>{element.received} thoughts received.</Text>
          </View>
        </Swipeable>
      );
    });
    return (
      <View style={{top: 100}}>
        <Text style={homeStyles.received}>Give them some love!</Text>
        {rows}
      </View>
    );
  }
}