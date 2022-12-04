import React from "react";
import Carosuel from "../../../components/Carosuel";
import Featured from "../../../components/Featured";
import Banner from "../../../components/Banner";
import Category from "../../../components/Category";

function Home() {
  return (
    <div>
      <Carosuel />
      <Banner />
      <Category />
      <Featured />
    </div>
  );
}

export default Home;
