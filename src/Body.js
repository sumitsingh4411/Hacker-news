import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Body.css"
import Page from "./Page"
function Body({input}) {
    const[messages,setmessages]=useState([]);
    useEffect(()=>{
    
            axios.get("https://hn.algolia.com/api/v1/search?query=...")
            .then(res=>{
                const t=res.data.hits;
                console.log(t)
                    setmessages(t);
            })
    },[])
    useEffect(()=>{
        axios.get(`http://hn.algolia.com/api/v1/search?query=${input}&tags=story`)
        .then(res=>{
            const t=res.data.hits;
            console.log(t)
                setmessages(t);
        })
},[input])
    return (
        <div className="body">
             <span style={{margin:"15px"}}>Search</span>
             <select style={{fontSize:"17px",marginTop:"10px"}}>
                 <option>All</option>
                 <option>Stories</option>
                 <option>Comments</option>
             </select>
             <span style={{margin:"15px"}}>By</span>
             <select style={{fontSize:"17px"}}>
                 <option>Popularity</option>
                 <option>Data</option>
                              </select>
             <span style={{margin:"15px"}}>for</span>
             <select style={{fontSize:"17px"}}>
                 <option>All time</option>
                 <option>Last 24 hours</option>
                 <option>Last hour</option>
                 <option>Custom Range</option>
             </select>
        {
            messages.map(m=>(
                <div className="map_v">
                <div className="body_lo">
                <a href={m.url}><span style={{fontSize:"18px"}}>{m.title}</span></a>
                (<a href={m.url}><span>{m.url}</span></a>)
                </div>
                <div className="low" style={{fontSize:"13px"}}>
                <a href={m.url}><span>{m.points}</span></a>|
                <a href={m.url}><span>{m.author}</span></a>|
                <a href={m.url}><span>{m.created_at}</span></a>|
                <a href={m.url}><span>{m.num_comments}</span></a>
                </div>                
                </div>
            ))
        }
        <Page/>
        <div className="bottom">
           <a><span>About</span></a>
           <a><span>Setting</span></a>
           <a><span>Help</span></a>
           <a><span>Api Documentation</span></a>
           <a><span>Hacker News</span></a>
           <a><span>Fork/Contribue</span></a>
           <a><span>Cool aps</span></a>
        </div>
            
        </div>
    )
}

export default Body
