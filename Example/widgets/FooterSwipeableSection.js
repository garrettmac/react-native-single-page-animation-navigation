/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,Image,
  View,Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';


export class Slide extends Component {
  render() {
    const {title,subTitle,paragraph} = this.props
      const titleText=null;
      const subTitleText=null;
      const paragraphText=null;
      if(title)titleText=<Text style={{marginLeft:20, width:200, fontSize:38, lineHeight:38,  fontWeight:'900', color:'#d9991d',}}>{title}</Text>
      if(subTitle)subTitleText=<Text style={{marginLeft:20, fontSize:38, lineHeight:38, fontWeight:'900', color:'#fff',}}>{subTitle}</Text>
      if(paragraph)paragraphText=<Text style={{marginLeft:20, fontSize:12, color:'#fff',}}>{paragraph}</Text>
  return(

     <View style={{flex:1}}>
      {titleText}
      {subTitleText}
      {paragraphText}
      </View>)
  }
}
export default class FooterTextSlide extends Component {
  render() {
    const{showSimple,title,subTitle,paragraph,icon,titleColor,marginLeft,subTitleColor,bodyColor,titleSize,subTitleSize,bodySize,miniListAboveFooter}=this.props

      return (
        <Swiper style={{margin:10}} tabBarPosition="bottom" tabBarUnderlineStyle={{backgroundColor:"#d9991d"}}>
        <Slide
        title={title}
        subTitle={subTitle}
        paragraph={paragraph}
       />
      </Swiper>)
  }
}
FooterTextSlide.defaultProps={
  title:"",
  "icon":"add-circle-outline",
  titleSize:28,
  titleColor:"#d9991d",
  subTitle:"",
  subTitleSize:38,
  subTitleColor:"#fff",
  paragraph:"",
  bodySize:12,
  bodyColor:"#fff",
}
