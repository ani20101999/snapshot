import React, { useEffect, useState } from 'react';
import axios from "axios";


export function Mountain(){
const [data,setData] = useState([]); 

    
 useEffect(()=>{
    const fetchData = async()=>{
    try{
    const resmount = await axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=1f656e9b9a5574ecf9be11d51c26e053&gallery_id=66911286-72157646472797634&format=json&nojsoncallback=1")
    setData(
        resmount.data.photos.photo)

   }
   catch(err){
       console.log(err)
   }   
}
fetchData();
},[])

function gettingImage(item,ind){  
var farmId = item.farm;
var serverId = item.server;
var id = item.id;
var secret = item.secret;

return (
<img key={ind} src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt="" className='image'/>

) 
}

return (<>
 <div className='mountains-div'>
    {
      data.map((item,ind)=>{
        return gettingImage(item,ind)
      })
    }
 </div>
</>)
}
