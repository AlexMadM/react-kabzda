import React, {useState} from 'react';



const UncontrolledOnOff = () => {

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

    const offClick=()=>{
        setOn(false)}


const onClicked=()=>{
    setOn(true)
}

    return (


        <div>
            <div onClick={onClicked} style={onStyle}>on</div>
            <div onClick={offClick} style={offStyle}>Off</div>
            <div onClick={()=>{}} style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;