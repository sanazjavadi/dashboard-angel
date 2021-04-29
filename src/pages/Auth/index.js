import React, { useState } from 'react';

//components
import SignIn from "./SignIn";
import SignUp from "./SignUp";



const Pages = {
  signUpComponent: SignUp,
  signInComponent: SignIn,

}



function Index({ status, changeStatus }) {
  const [CurrentPage, setcurrentPage] = useState('signUpComponent')

  const Comp = Pages[CurrentPage]
  const changePage = component => {
    setcurrentPage(component)
  }
  return (
 
      <Comp changeHandler={changePage} />
   
  );
} 

export default Index;
