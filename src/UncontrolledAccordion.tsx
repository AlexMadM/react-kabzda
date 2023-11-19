import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string

}


const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick ={()=>{setCollapsed(!collapsed)}} />
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>{props.onClick()}}>--{props.title}--</h3>
    )
}

function AccordionBody() {
    console.log('accordion rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}

export default UncontrolledAccordion;