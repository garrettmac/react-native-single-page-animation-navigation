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

export default class FooterTextSlide extends Component {
  render() {
    const{title,subTitle,body,titleColor,marginLeft,subTitleColor,bodyColor,titleSize,subTitleSize,bodySize,bubbleImageList}=this.props
let bubbleListView=null;
if(bubbleImageList&&(body!=="")){
  bubbleListView=<View style={{flexDirection:"row",marginLeft:10,}}>
  {bubbleImageList.map((item,i) => {
    return <Image key={`frienlist-item-${i}`} source ={{uri: item.image}} resizeMode ="contain" style={{height:40, width:40, marginLeft:-10,  marginBottom:10, borderRadius:20, backgroundColor:'#f8f8f8'}} />
  })}
  <View style={{justifyContent:"center",alignItems:"center",height:40, width:40,}} >
    <Icon name="add-circle-outline" color="white" size={20}/>
    </View>
  </View>

}
  return(<View style={{width,marginLeft,flex:1}}>
    {bubbleListView}
      <Text style={{ width, fontSize:titleSize, lineHeight:titleSize,  fontWeight:'900', color:titleColor,}}>
      {title}
      </Text>
       <Text style={{ fontSize:subTitleSize, lineHeight:subTitleSize, fontWeight:'900', color:subTitleColor,}}>
      {subTitle}
      </Text>
      <Text style={{ fontSize:bodySize, color:bodyColor,}}>
        {body}
      </Text>
      </View>)
  }
}
FooterTextSlide.defaultProps={
  title:"",
  titleSize:28,
  titleColor:"#d9991d",
  subTitle:"",
  subTitleSize:38,
  subTitleColor:"#fff",
  body:"",
  bodySize:12,
  bodyColor:"#fff",
}
