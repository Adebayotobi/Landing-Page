import React from "react";
import MainPage from "./Pages/MainPage";
import OneComponent from "./Pages/OneComponent";
import Card from "./Pages/OnlineLearning"
import About from "./Pages/About";
import Footer from "./Pages/Courses";
import mainlogo from "./images/Chat2.png"
import mainlogo1 from "./images/chat-image.jpeg"


function Home() {
  return (
    <>
      <MainPage 
        mediumText="Grow yourself with us"
        bigText="Be the first to reach out"
        para="Expanding your network brings about a career opportunities. Meet helps you create that network for a happier future."
        btn="Search"
        imgLink={mainlogo1}
      />
      
      <About
        imgLink={mainlogo}
        bigText="Create a new family not your home but from your society"
        para1="Never be alone with your interest, get to make new friends who share the same thoughts with you."
        para2="The fatest way to connect with your peers and share your opinions on all common interest"
        btn="Explore More"
      />
      <Card />
     <OneComponent />
     <Footer />
    </>
  );
}

export default Home;
