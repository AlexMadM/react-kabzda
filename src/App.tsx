import React, {useState} from 'react';

import './App.css';
import Rating, {RatingValueType} from "./Rating";
import Accordion from "./Accordion";
import OnOff from "./OnOff";
import UncontrolledAccordion from "./UncontrolledAccordion";
import UncontrolledRating from "./UncontrolledRating";

function App() {
    let [ratingValue, setRatingValue]= useState<RatingValueType>(0);
    let [accordionCollapsed,setAccordionCollapsed]= useState<boolean>(true)
const acc=()=> setAccordionCollapsed(!accordionCollapsed)
  return (
    <div>
    {/*  <OnOff/>*/}
    {/*  <UncontrolledRating />*/}
    {/*  <UncontrolledAccordion titleValue={'Menu'}/>*/}
    {/*<PageTitle title={"This is APP component"}/>*/}
    {/*  <PageTitle title={"My friends"}/>*/}
      <Accordion titleValue={'Menu'}  acc={acc} accordionCollapsed={accordionCollapsed}/>
    {/*  <Accordion titleValue={'Users'} collapsed={false}/>*/}
      <Rating value={ratingValue} onClick={setRatingValue}/>
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}



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




