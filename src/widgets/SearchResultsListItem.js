import React, { Component } from 'react';
import {View, Text, Dimensions,TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const {width, height} = Dimensions.get('window');
import _ from 'lodash';
export default class SearchResultsListItem extends Component {
constructor(props){
	super(props)
	// console.log(this.props)
}
  render() {


let o=this.props.rowData

       var searchItem;
       if(_.has(o,"tour_image.image['200x150']")){
          searchItem={
            category:"Excursion",
            color:"#333",
            name:o.name,
            image:o.tour_image.image['200x150'],
            details:o.teaser,
          }
     }else if(_.has(o,"shorefox_id")
             &&_.has(o,"cruise_line_id")){
               searchItem={
                 category:"Cruise Ship",
                 color:"#01a699",
                 name:o.name,
                 details:`In ${o.cruiseline.name} Cruise Line`,
                 image:`https://rawgit.com/garrettmac/Image-Hosting/master/PPal/cruiseships/${o.shorefox_id}.jpg`
               }
     }else if(_.has(o,"shorefox_id")
             &&!_.has(o,"cruise_line_id")){
               searchItem={
                 category:"Cruise Line",
                 color:"#007986",
                 details:`${o.name} Cruise Line`,
                 name:o.name,
                 image:`https://rawgit.com/garrettmac/Image-Hosting/master/PPal/cruiselines/${o.shorefox_id}.jpg`
             }
    }else if(_.has(o,"destination_image")
            &&!_.has(o,"coordinates")){
              searchItem={
                category:"Region",
                color:"#ff5b5f",
                name:o.name,
                details:`Geographical Location`,
                image:o.destination_image.image['200x150']
              }
     }else if(_.has(o,"destination_image")
              &&_.has(o,"coordinates")){
                searchItem={
                  category:"Destination",
                  color:"#f99137",
                  name:o.short_name,
                  details:`${o.long_name} (lat: ${_.get(o,"coordinates.latitude")}, long: ${_.get(o,"coordinates.longitude")})`,
                  image:o.destination_image.image['200x150']
                }
    }
    else{
    searchItem= {}
    }






    // <TouchableOpacity onPress ={() => console.log("pressed convo:",this.props.rowData.message)}>
    return (

    	 <TouchableOpacity onPress ={(item) => console.log(item)}>
      <View style= {{paddingTop:5,flex: 1,width:width, flexDirection:'row', borderBottomWidth:1,opacity:0.5, borderColor:'#e3e3e3'}}>
{/* <View style={{flex: 1, flexDirection: 'column'}}> */}
<View style={{alignSelf:'center', justifyContent:'center',}}>
  <View style={{borderRadius:5,borderWidth:1,borderColor:_.get(searchItem,"color","#333"),backgroundColor:_.get(searchItem,"color","#333"),alignSelf:'center', justifyContent:'center'}}>
        <Text style={{width:50,padding:1, textAlign:"center",fontWeight:'400', color:'#fff', fontSize:10}}>{_.get(searchItem,"category","Unknown")}</Text>
          </View>
      <Image source ={{uri: _.get(searchItem,"image","https://rawgit.com/garrettmac/Image-Hosting/master/placeholder.png")}} resizeMode ="contain" style={{height:50, width:50, margin:8, borderRadius:25, backgroundColor:'#f8f8f8'}} />
    </View>
      <View style={{alignSelf:'center', justifyContent:'center'}}>
      <View style = {{flexDirection:'row', justifyContent:'space-between', width:210}}>
      <Text style={{fontWeight:'600', color:'#333'}}>{_.get(searchItem,"name","N/A")}</Text>
      </View>
      <Text style ={{width:150, height:35, fontWeight:'300', color:'#333'}}>{_.get(searchItem,"details","N/A")}</Text>
      </View>
      </View>
      </TouchableOpacity>

    );
  }
}

SearchResultsListItem.defaultProps = {
  results:[]
}
