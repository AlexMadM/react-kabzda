import React from 'react';

type ItemType={
    title:string
    value:any
}

type AccordionPropsType={
    titleValue:string
    accordionCollapsed:boolean
    onChange:()=>void
    items:ItemType[]
    onClick:(value:any)=>void
}


const Accordion = (props:AccordionPropsType) => {
    console.log('accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            { props.accordionCollapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
};

type AccordionTitlePropsType ={
    title: string
    onChange:()=>void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onChange}>--{props.title}--</h3>
    )
}

type AccordionBodyProps ={
    items:ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody (props:AccordionBodyProps){
    console.log('accordion rendering')
    return(
        <ul>
            {props.items.map((i,index)=>
                <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}

        </ul>

    )
}

export default Accordion;