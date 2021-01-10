import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import SearchIcon from '@material-ui/icons/Search';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import React,{ useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
   const[input,setinput]=useState('');
   const[email,setemail]=useState();
   const[password,setpassword]=useState();
   const[opensignin,setopensignin]=useState(true);
   const [modalStyle] = React.useState(getModalStyle);
   const classes = useStyles();
   const signin=() =>{
            if(!email || !password)
            alert("please fill all the mandatory box")   
            else
            {
              alert("Thank you")  
              setopensignin(false);
            }

   }
  return (
    <div className="app">
     <div className="header">
     <img className="header_logo" src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"/>
       {
         !email ? (
          <div className="text">
          <p>Search</p>
          <p>Hacker News</p>
          </div>
         )
         : <h3>{email}</h3>
       }
           
            
            <div className="middle">
            <SearchIcon fontSize="large" style={{color:"#ff742b",marginRight:"10px"}}/>
            <input className="middle_input" type="text"
              value={input} onChange={e => setinput(e.target.value)}
            placeholder="Search stories by title, url or author"/>
            <img style={{marginTop:"10px"}} className="input_logo" src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg"/>
            </div>
            <div className="end">
            <SettingsIcon fontSize="large"/>
            <p>Settings</p>
            </div>
        </div>
        <Modal
        open={opensignin}
        onClose={()=>setopensignin(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        <from className="app_signup">
      <center>
      <img src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
        alt="" className="app_logo"/>
      </center>
      <Input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        style={{marginTop:"20px"}}
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        style={{marginTop:"20px"}}
      />
      <Button  style={{marginTop:"20px"}}  onClick={signin}>Sign Up</Button>
      </from>
      </div>
      </Modal>
     <Body input={input}/>
    </div>
  );
}

export default App;
