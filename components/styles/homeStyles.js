import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rowSpacer: {
    marginBottom: 20,
  },
  emptySet: {
    fontFamily: "lato-light",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 20,
  },
  row: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ACACAC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  rowName: {
    fontFamily: "lato-light",
    fontSize: 18,
  },
  rowThoughts: {
    fontFamily: 'lato-light',
    fontSize: 14,
  },
  swipeLeft: {
    height: 60,
    paddingLeft: 30,
    justifyContent: 'center'
  },
  swipeRight: {
    height: 60,
    marginLeft: 320,
    justifyContent: 'center',
  },
  received: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: "lato-light",
    fontSize: 20,
    color: "skyblue",
  },
});