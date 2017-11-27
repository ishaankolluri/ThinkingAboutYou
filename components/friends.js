import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableHighlight, 
  Animated
} from 'react-native';

import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons'
import simpleContacts from 'react-native-simple-contacts';

import homeStyles from './styles/homeStyles';
import friendStyles from "./styles/friendStyles";

export default class Header extends React.Component {
  constructor(props){
    super(props);
    let sorted = this.props.data.slice();
    sorted.sort(compare);
    this.state = {
      data: sorted
    }
  }

  handleAddClick(){
    alert("Contacts");
  }

  renderData(){
    let data = this.state.data;
    if(data.length === 0){
      return (
        <Text style={homeStyles.emptySet}>
          You have no friends! Add some!
        </Text>
      );
    }
    let rows = data.map((element, index) => {
      const rightButtons = [
        <TouchableHighlight style={homeStyles.swipeLeft}>
          <Icon
            size={28}
            color="red"
            name="delete"
            onPress={() => this.props.handleFriendDelete(element.name)}
          />
        </TouchableHighlight>,
      ];
      const leftButtons = [
        <TouchableHighlight style={homeStyles.swipeRight}>
          <Icon
            size={28}
            color="skyblue"
            name="reply"
            onPress={(index) => alert("Thought sent to " + element.name + "!")}
          />
        </TouchableHighlight>,
      ];
      return (
        <Swipeable
          key={index}
          style={homeStyles.rowSpacer} 
          leftButtons = {leftButtons} 
          rightButtons={rightButtons}>
          <View style={homeStyles.row}>
            <Text style={homeStyles.rowName}>{element.name}</Text>
            <Text style={homeStyles.rowThoughts}>
              {element.thoughts} thoughts sent!
            </Text>
          </View>
        </Swipeable>
      );
    });
    return rows;
  }
  render(){
    let data = this.renderData();
    return (
      <View>
        <View style={{top: 100}}>
          <Text style={homeStyles.received}>
            Your friends, ordered by activity.
          </Text>
          <ScrollView contentContainerStyle={{ paddingVertical: 15}}>
            {data}
          </ScrollView>
        </View>
        <View style={friendStyles.addContainer}>
          <Text style={friendStyles.deleteInfo}>
            Swipe left to delete friends.
          </Text>
          <Icon
            size={90}
            color="skyblue"
            name="add-circle"
            style={friendStyles.add}
            onPress={() => this.handleAddClick()}
          />
        </View>
      </View>
    );
  }

}

function compare(obj1, obj2){
  let a = parseInt(obj1.thoughts);
  let b = parseInt(obj2.thoughts);
  return b - a;
}