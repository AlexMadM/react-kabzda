import React from 'react';

import './App.css';
import Rating from "./Rating";
import Accordion from "./Accordion";

function App() {
  return (
    <div>
    <PageTitle title={"This is APP component"}/>
      <PageTitle title={"My friends"}/>
      <Accordion titleValue={'Menu'} collapsed={true}/>
      <Accordion titleValue={'Users'} collapsed={false}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>


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
