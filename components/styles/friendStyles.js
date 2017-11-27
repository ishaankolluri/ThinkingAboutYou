import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  deleteInfo: {
    backgroundColor: "transparent",
    color: "red",
    fontSize: 12,
    fontFamily: 'lato-light',
    textAlign: "center",
  },
  addContainer: {
    width: "100%",
    top: 570, 
    position: "absolute", 
    zIndex: 1, 
    height: 60, 
    justifyContent: "center", 
    alignItems: "center",
  },
  add: {
    backgroundColor: "transparent",
    shadowColor: '#ACACAC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  }
});