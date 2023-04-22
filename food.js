import React,{useState,useEffect} from 'react'
import axios from 'axios'

export const Food = () => {
    const [data3,setData3] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
        try{
         let resbirds = await axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f0bc7967b7de5c660b2d71906712fd08&gallery_id=66911286-72157649599148925&format=json&nojsoncallback=1")
         setData3(
            resbirds.data.photos.photo)
        }
        catch(err){
            console.log(err)
        }   
     }
     fetchData();
     },[])
  
     function gettingImage3(item,ind){  
        var farmId = item.farm;
        var serverId = item.server;
        var id = item.id;
        var secret = item.secret;
        
        return <img key={ind} src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt="" className='image'/>
        }
        
        return (<>
         <div className='beaches-div'>
            {
              data3.map((item3,ind)=>{
                return gettingImage3(item3,ind)
              })
            }
         </div>
        </>)
}
