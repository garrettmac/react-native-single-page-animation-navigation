/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import People from './Pages/People';

// const bubbleDefaults={
//   "start":{
//     "borderRadius": 40,
//     "height": 80,
//     "iconSize": 20,
//     "width": 80
//   },
//   "end":{
//     "borderRadius": 20,
//     "height": 40,
//     "iconSize": 20,
//     "width": 40
//   }
// }
let button1 =function(){alert("Pressed button 1")}

export default () => {
   return [
    {
      "color": "#7f88d3",
      "onPress":button1,
      "component":<People/>,
      "moveMainContent":true,
      FooterContent:{
        "title":"Your Group's",
        "subTitle":"Chats",
        "paragraph":"",
      },
      "icon": "comment-text-outline",
      "start": {"top": 60,"right": 30},
      "end": {"top": -150,"right": 150}
    },
    // {
    //   "color": "#1fb5d9",
    //   "onPress":peopleButton,
    //   "component":friendsComponent,
    //   "moveMainContent":true,
    //   FooterContent:{
    //     "title":"Your Lifeboat's",
    //     "subTitle":"Friends",
    //     "paragraph":"",
    //   },
    //   "icon": "ios-people-outline",
    //   "iconFamily": "IonIcons",
    //   "start": {"top": 160,"right": 50},
    //   "end": {"top": -150,"right": 80}
    // },
    // {
    //   "color": "#ff5b5f",
    //   "onPress":heartButton,
    //   "component":friendsComponent,
    //   "moveMainContent":true,
    //   FooterContent:{
    //     "title":"Your Lifeboat's",
    //     "subTitle":"Likes",
    //     "paragraph":"",
    //   },
    //   "icon": "heart-outline",
    //   "start": {"top": 280,"right": 30},
    //   "end": {"top": -150,"right": 10}
    // },
    // {
    //   "color": "#3b5998",
    //   "onPress":facebookButton,
    //   "component":friendsComponent,
    //   "moveMainContent":false,
    //   FooterContent:{
    //     "title":"Your",
    //     "subTitle":"Facebook Friends",
    //     "paragraph":"",
    //   },
    //   "icon": "facebook",
    //   "start": {"top": -250,"right": 250},
    //   "end": {"top": 90,"right": 45}
    // },
    // {
    //   "color": "#01a699",
    //   "onPress":anchorButton,
    //   "component":anchorComponent,
    //   "moveMainContent":false,
    //   FooterContent:{
    //     "title":"Your Lifeboat's",
    //     "subTitle":"anchor",
    //     "paragraph":"",
    //   },
    //   "icon": "anchor",
    //   "iconImage":{uri:"https://rawgit.com/garrettmac/images/master/projects/portpal/logo-p.png"},
    //   "start": {"top": -250,"right": 140},
    //   "end": {"top": 90,"right": 115}
    // }
  ]
   }
