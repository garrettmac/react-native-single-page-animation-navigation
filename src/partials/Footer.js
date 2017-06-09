/* @Footer */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,} from 'react-native';

import Loading from 'react-native-spinkit';
import _ from 'lodash';
import Swiper from 'react-native-scrollable-tab-view'
import FooterSwipeableSection from '../widgets/FooterSwipeableSection'
var {height, width} = Dimensions.get('window');

export default class Footer extends Component {
  render(){



    const{title,
subTitle,
paragraph,
marginLeft,
footerList,
footerListButtonOnPress,
subTitleSize,top,showTabBar,
titleSize}=this.props
  let footerItem=null

    return  (
         <Swiper style={{margin:10,}} tabBarPosition={showTabBar?"overlayBottom":null} tabBarUnderlineStyle={showTabBar?{top:60,backgroundColor:"#d9991d"}:null}>





            <FooterSwipeableSection
                style={{marginBottom:0,}}
                title={title}
                subTitle={subTitle}
                footerList={footerList}
                footerListButtonOnPress={footerListButtonOnPress}
                subTitleSize={subTitleSize}
                titleSize={titleSize}
                //marginLeft={marginLeft}
                body={paragraph}
                titleColor="#fff"
                subTitleColor="#2ecc71"
                 tabLabel="" />

                 {/* <FooterSwipeableSection
                      style={{marginBottom:0,}}
                      title={"Some Title"}
                      subTitle={"Some subTitle"}
                      subTitleSize={subTitleSize}
                      titleSize={titleSize}
                      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      titleColor="#fff"
                      subTitleColor="#2ecc71"
                       tabLabel="" /> */}

         </Swiper>)

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


























/*


import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,} from 'react-native';
  import * as Animatable from 'react-native-animatable';

import Loading from 'react-native-spinkit';
import _ from 'lodash';
import Swiper from 'react-native-scrollable-tab-view'
import FooterSwipeableSection from '../widgets/FooterSwipeableSection'
var {height, width} = Dimensions.get('window');

export default class Footer extends Component {


//onPress(){}
  render(){



    const{
title,
subTitle,
paragraph,
titleColor,
subTitleColor,
paragraphColor,
titleSize,
subTitleSize,
paragraphSize,

animatableEnd,
animatableStart,
footerList,
footerListButtonOnPress,
top,showTabBar,
onPress,}=this.props
  let footerItem=null
  let footerItem1=null

    // footerItem=(   <FooterSwipeableSection
    //      style={{marginBottom:0,}}
    //      title={title}
    //      subTitle={subTitle}
    //      footerList={footerList}
    //      footerListButtonOnPress={footerListButtonOnPress}
    //      subTitleSize={subTitleSize}
    //      onPress={()=>{
    //                    this.refs.footer.transitionTo((this.props.isOpen)?animatableStart:animatableEnd)
    //                    onPress()
    //                  }}
    //      titleSize={titleSize}
    //      paragraph={paragraph}
    //      titleColor="#fff"
    //      subTitleColor="#2ecc71"
    //     //  tabLabel=""
    //      />)
        footerItem1=  ( <View style={{width,flex:1}}>
          {footerListView}
             <Text style={{ width, fontSize:titleSize, lineHeight:titleSize,  fontWeight:'900', color:titleColor,}}>
             {title}
             </Text>
              <Text style={{ fontSize:subTitleSize, lineHeight:subTitleSize, fontWeight:'900', color:subTitleColor,}}>
             {subTitle}
             </Text>
             <Text style={{ fontSize:paragraphSize, color:paragraphColor,}}>
               {paragraph}
             </Text>
             </View>)

    // return  ( <Animatable.View ref="footer" style={[{position:"absolute"},animatableStart]}>
    //   <TouchableOpacity onPress={()=>{
    //                     this.refs.footer.transitionTo((this.props.isOpen)?animatableStart:animatableEnd)
    //                     if(onPress && (typeof(onPress) == 'function'))onPress()
    //                   }}>
        return  ( <Swiper style={{margin:10,}} tabBarPosition={showTabBar?"overlayBottom":null} tabBarUnderlineStyle={showTabBar?{top:60,backgroundColor:"#d9991d"}:null}>



      {footerItem1}
         { <FooterSwipeableSection  {...this.props} tabLabel="   " />
         </Swiper>
      //  </TouchableOpacity>
      //  </Animatable.View>)
      )

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
Footer.defaultProps={
  title:"",
  "icon":"add-circle-outline",
  titleSize:28,
  titleColor:"#d9991d",
  subTitle:"",
  subTitleSize:38,
  subTitleColor:"#fff",
  paragraph:"",
  paragraphSize:12,
  paragraphColor:"#fff",
}

*/
