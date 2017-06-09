/* @flow */

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

export default class ChildPropertyContainer extends Component {



  render(){
    const {childComponent,ListViewTop,childList} = this.props
    let ConditionalComponent = null;

    if (childList) {
      ConditionalComponent = (<ListView style={{flex: 1,width,height,}}
      enableEmptySections={true}
      dataSource={ds.cloneWithRows((childList)?childList:[{name: 'item 1'}, {name: 'item 2'}])} renderRow= {(rowData,key) =>
        // <Message onPressChild={this.selectedFriend} key={`kessage-${key}`}  rowData={rowData} />
<TouchableOpacity onPress={()=>(o.onPress)?o.onPress:alert("pressed item")}>
  <Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>
    {(o.name)?o.name:"no name attrabute"}
  </Text>
</TouchableOpacity>
      }/>);
} else {
  ConditionalComponent =childComponent
}

return(<Animated.View
      ref={component => this._root = component}
      {...this.props}
      style={{//backgroundColor:"red",
      position:"absolute",height,top:ListViewTop,flex:3}}>
      {/* <Text style={{ width,height:60,color:"white",marginLeft:20,marginTop:20,fontSize:30,fontWeight:'700'}}>{_.upperCase(this.props.resultsHeading)}</Text> */}

   {ConditionalComponent}
 </Animated.View>)
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
