import Image from "next/image";
import React from "react";

const GetApp = () => {
  return (
    <div className="pt-[7%] px-[10%] flex items-center gap-12 pb-[7%]">
      <div className="mt-7">
        <Image src={require("../assets/images/future2.png")} />
      </div>
      <div className="absolute top-[100px] right-[120px] h-[10%] w-[10%]">
        <Image src={require("../assets/images/arrow.png")} />
      </div>
      <div className="ml-7 flex flex-col items-center gap-9">
        <h1
          className="text-white text-4xl"
          style={{ fontFamily: "PilatExtended" }}
        >
          We are Live on the Web
        </h1>
        <p className="text-white text-2xl" style={{ fontFamily: "Lato" }}>
          Download the App
        </p>
        <button>
          <Image src={require("../assets/images/app.png")} />
        </button>
      </div>
    </div>
  );
};

export default GetApp;
