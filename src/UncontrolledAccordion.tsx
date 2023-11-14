import React from 'react';

type AccordionPropsType={
    titleValue:string

}


const UncontrolledAccordion = (props:AccordionPropsType) => {
 const collapsed = false

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button>toggle</button>
            { collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType ={
    title: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>--{props.title}--</h3>
    )
}

function AccordionBody (){
    console.log('accordion rendering')
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}

export default UncontrolledAccordion;