import React, {useState} from 'react';

type PropsOn={
    on:boolean
    setOff:(on:boolean)=>void
}


const OnOff = (props:PropsOn) => {



    const onStyle ={
        width:'30px',
        height:'20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'2px',
        backgroundColor: props.on ? 'green' : 'white'

    }

    const offStyle ={
        width:'30px',
        height:'20px',
        border: '1px solid black',
        display:'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'

    }


    const indicatorStyle={
        width:'10px',
        height:'10px',
        borderRadius: '5px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }


    return (


        <div>
            <div onClick={()=>props.setOff(true)} style={onStyle}>on</div>
            <div onClick={()=>props.setOff(false)} style={offStyle}>Off</div>
            <div onClick={()=>{}} style={indicatorStyle}></div>
        </div>
    );
};



export default OnOff;