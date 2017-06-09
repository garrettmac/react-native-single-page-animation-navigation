

/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';

import randomcolor from 'randomcolor';
var {height, width} = Dimensions.get('window');

export class PersonItem extends Component {

  handleClick = (o) => {
    if(this.props.updateState)this.props.updateState(o);
  }
render(){
  const {name,id} = this.props
return (<TouchableOpacity onPress ={this.handleClick}>
     <View style= {{padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#e3e3e3'}}>
    <Image source ={{uri: `https://robohash.org/${name}?size=350x350&set=set1`}} resizeMode ="contain" style={{height:50, width:50, margin:10, borderRadius:25, backgroundColor:'#f8f8f8'}} />
     <View style={{alignSelf:'center', justifyContent:'center'}}>
     <View style = {{flexDirection:'row', justifyContent:'space-between', width:210}}>
     <Text style={{fontWeight:'600', color:'#333'}}>{name}</Text>

     </View>
     <Text style ={{width:150, height:35, fontWeight:'300', color:'#333'}}>Click To Update Person</Text>
     </View>
     </View>
     </TouchableOpacity>)
}
}





export default class People extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      activePerson: null,
      people:[{"id":1,"name":"Bernie Sanders"},{"id":2,"name":"Al Frankin"},{"id":3,"name":"Elizabeth Warren"},{"id":4,"name":"Cory Booker"}]
    };
  }
  updateState = (person) => {
  this.setState({activePerson: person});
  }
  render() {
    return (
      <Animated.ScrollView
      style={{
               flex: 1,
               backgroundColor:"blue",
              width: width,
              // marginTop:120,
              height: height
           }}>
      {this.state.map((item,i) => {
    return  <PersonItem updateState={this.updateState} key={`person-${i}`}  rowData={item} />
    })
  }

  </Animated.ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
