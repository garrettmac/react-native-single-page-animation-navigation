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
renderFooterMiniListButton(){
  if(this.props.footerListButtonOnPress){
    return (<TouchableOpacity onPress={()=>this.props.footerListButtonOnPress()} style={{justifyContent:"center",alignItems:"center",height:40, width:40,}} >
      <Icon name={this.props.icon} color="white" size={20}/>
      </TouchableOpacity>)
  }
  return null
}
  render() {
    const{showSimple,title,subTitle,paragraph,icon,titleColor,marginLeft,subTitleColor,bodyColor,titleSize,subTitleSize,bodySize,footerList}=this.props
let footerListView=null;
if(showSimple&& footerList&&(paragraph!=="")){
  footerListView=<View style={{flexDirection:"row",marginLeft:10,}}>
  {footerList.map((item,i) => {
    return <Image key={`frienlist-item-${i}`} source ={{uri: item.image}} resizeMode ="contain" style={{height:40, width:40, marginLeft:-10,  marginBottom:10, borderRadius:20, backgroundColor:'#f8f8f8'}} />
  })}
  {this.renderFooterMiniListButton()}

  </View>

}
  return(<View style={{width,marginLeft,flex:1}}>
    {footerListView}
      <Text style={{ width, fontSize:titleSize, lineHeight:titleSize,  fontWeight:'900', color:titleColor,}}>
      {title}
      </Text>
       <Text style={{ fontSize:subTitleSize, lineHeight:subTitleSize, fontWeight:'900', color:subTitleColor,}}>
      {subTitle}
      </Text>
            {showSimple
              ?(<Text style={{ fontSize:bodySize, color:bodyColor,}}>
              {paragraph}
            </Text>)
              :null
            }
      </View>)
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
