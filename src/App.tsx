import React, {useState} from 'react';

import './App.css';
import Rating, {RatingValueType} from "./Rating";
import Accordion from "./Accordion";
import UncontrolledOnOff from "./UncontrolledOnOff";
import UncontrolledAccordion from "./UncontrolledAccordion";
import UncontrolledRating from "./UncontrolledRating";
import OnOff from "./OnOff";

function App() {
    let [ratingValue, setRatingValue]= useState<RatingValueType>(0);
    let [accordionCollapsed,setAccordionCollapsed]= useState<boolean>(true)
    let [on , setOff]= useState(true)
const acc=()=> setAccordionCollapsed(!accordionCollapsed)
  return (
    <div>
    {/*  <UncontrolledOnOff/>*/}
    {/*  <UncontrolledRating />*/}
    {/*  <UncontrolledAccordion titleValue={'Menu'}/>*/}
    {/*<PageTitle title={"This is APP component"}/>*/}
    {/*  <PageTitle title={"My friends"}/>*/}
      <Accordion titleValue={'Menu'}  accordionCollapsed={accordionCollapsed}/>
    {/*  <Accordion titleValue={'Users'} collapsed={false}/>*/}
      <Rating value={ratingValue} onClick={setRatingValue}/>

<OnOff on={on} setOff={setOff}/>


    </div>
  );
}

type PageTitlePropsType = {
  title:string
}

function PageTitle(props:PageTitlePropsType){
  console.log('pagetitle rendering')
  return <h1>{props.title}</h1>
}



export default App;




