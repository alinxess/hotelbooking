import React from 'react';
import "./propertyList.css";
import useFetch from '../../hooks/useFetch';



function PropertyList() {

    const {data, loading, error} = useFetch("/hotels/countByType");
    
    const images = [
        "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072__340.jpg",
        "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg",
        "https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308__340.jpg",
        "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
        "https://cdn.pixabay.com/photo/2013/03/22/00/24/log-home-95677__340.jpg",
    ];

    return(
      <div className="pList">
        {loading ? (
            "loading"
        ) : (
         <>
           {data &&
              images.map((img,i)=>(
                  <div className='pListItem' key={i}>
                    <img src={img} alt="" className='pListImg' />
                    <div className='pListTitles'>
                        <h1>{data[i]?data[i].type:""}</h1>
                        <h2>{data[i]?data[i].count:0} {data[i]?data[i].type:""}</h2>
                    </div>
                   </div>
                ))
           }
          </>
        )}
      </div>
    );
};

export default PropertyList;