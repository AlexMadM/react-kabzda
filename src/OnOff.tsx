import React, {useState} from 'react';



const OnOff = () => {

 const [on,setOn]= useState(false)

    const onStyle ={
        width:'30px',
        height:'20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'2px',
        backgroundColor: on ? 'green' : 'white'

    }

const offStyle ={
    width:'30px',
    height:'20px',
    border: '1px solid black',
    display:'inline-block',
    padding: '2px',
    backgroundColor: on ? 'white' : 'red'

}


    const indicatorStyle={
        width:'10px',
        height:'10px',
        borderRadius: '5px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }


    return (


        <div>
            <div onClick={()=>{setOn(true)}} style={onStyle}>on</div>
            <div onClick={()=>{setOn(false)}} style={offStyle}>Off</div>
            <div onClick={()=>{}} style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;