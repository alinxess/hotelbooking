import React from 'react';
import "./featured.css";
import useFetch from '../../hooks/useFetch';




function Featured() {

    const {data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

    return(
        <div className='featured'>
            {loading ? (
                "Loading please wait"
                ) : (
                <>
                <div className="featuredItem">
                <img src="https://cdn.pixabay.com/photo/2017/06/21/22/05/bridge-2428773__340.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.pixabay.com/photo/2016/10/20/17/46/austin-texas-1756159__340.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.pixabay.com/photo/2014/01/21/07/56/guesthouses-248981__340.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>
            </>
            )}
        </div>
    );
}

export default Featured;