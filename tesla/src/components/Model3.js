import React from "react";
import model3 from "../assets/3.jpg";
import { Link } from "react-router-dom";

function Model3() {
  return (
    <div
      className="snap-start h-screen w-screen flex text-5xl relative z-20 "
      style={{
        background: `url(${model3})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-black font-medium tracking-wide z-10 mt-44 ">
        <h1 className="text-5xl mb-2">Model 3</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 absolute bottom-0 left-0 right-0 top-[450px] sm:top-[500px] md:top-[400px] xl:top-[600px] xxl:top-[750px] justify-center items-center	">
        <Link to="/objednavka">
          <button className="bg-opacity-80 bg-lightBlack text-white text-base rounded-md py-3 w-80 md:w-80 tracking-wider">
            Objednávka na míru
          </button>
        </Link>
        <Link to="/jizda">
          <button className=" bg-opacity-65 bg-lightWhite text-lightBlack  text-base rounded-md py-3 w-80 md:w-80 tracking-wider">
            Testovací jízda
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Model3;
