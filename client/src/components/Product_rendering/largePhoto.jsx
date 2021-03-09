import React, {useEffect} from 'react';
import Magnifier from 'react-magnifier';
import Magnify from './Magnify.jsx';
 var largePhoto = (props) => {
    return (props.photo ?
    <Magnifier key={props.photo} onClick={props.fullscreen} className='largeImage' id='lg' src={props.photo} width='auto' height='600'></Magnifier>
    : <div></div>)
  }

  export default largePhoto;


