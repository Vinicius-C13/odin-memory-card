import * as React from 'react';

const  Card = (props) => {

    let container = {
        width: '100px',
        height: 'fit-content',
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0px 0px 15px -1px rgba(0,0,0,0.75)'
    }

    let imageStyle = {
        width: '100%'
    }

    let nameStyle = {
        margin: '0'
    }

  return (
    <div style={container} onClick={(e) => props.handleClick(e, props.clicked)} id={props.name}>
        <img src={props.image} style={imageStyle}/>
        <h3 style={nameStyle}>{props.name}</h3>
    </div>
  );
}

export default Card