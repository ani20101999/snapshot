import React, { useState,useEffect } from 'react';
import axios from 'axios';

export const Beaches = () => {
  const [data1,setData1] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
        try{
         let resbeach = await axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f0bc7967b7de5c660b2d71906712fd08&gallery_id=66911286-72157719748270585&format=json&nojsoncallback=1")
         setData1(
            resbeach.data.photos.photo)
        }
        catch(err){
            console.log(err)
        }   
     }
     fetchData();
     },[])
  
     function gettingImage1(item,ind){  
        var farmId = item.farm;
        var serverId = item.server;
        var id = item.id;
        var secret = item.secret;
        
        return <img key={ind} src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt="" className='image'/>
        }
        
        return (<>
         <div className='beaches-div'>
            {
              data1.map((item1,ind)=>{
                return gettingImage1(item1,ind)
              })
            }
         </div>
        </>)
}
