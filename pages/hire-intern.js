import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Lottie from "react-lottie";
import InternverseGradient from "../components/InternverseGradient";
import ListOfSuperInterns from "../components/ListOfSuperInterns";

const styles = {
  wrapper: "",
  content: "pt-[8%] m-5 p-5",
  headerTitle: "text-white text-6xl",
  cardContainer: "flex justify-between items-center mb-5 mt-[5%]",
  checkBox:
    "scale-150 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#FDBC46] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer relative right-0",
};

const HireIntern = () => {
  const [internChecked, setInternChecked] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div
          style={{ fontFamily: "PilatExtended" }}
          className={styles.headerTitle}
        >
          Hire your <InternverseGradient />
        </div>
        <div className={styles.cardContainer}>
          <InternCard
            internChecked={internChecked}
            setInternChecked={setInternChecked}
            text="Community"
            animateJSON={require("../assets/animations/community.json")}
          />
          <InternCard
            internChecked={internChecked}
            setInternChecked={setInternChecked}
            text="Content"
            animateJSON={require("../assets/animations/content.json")}
          />
          <InternCard
            internChecked={internChecked}
            setInternChecked={setInternChecked}
            text="Developer"
            animateJSON={require("../assets/animations/developer.json")}
          />
          <InternCard
            internChecked={internChecked}
            setInternChecked={setInternChecked}
            text="Designer"
            animateJSON={require("../assets/animations/designer.json")}
          />
          <InternCard
            internChecked={internChecked}
            setInternChecked={setInternChecked}
            text="Others"
            animateJSON={require("../assets/animations/others.json")}
          />
        </div>
        <div className="flex justify-end">
          <button className="hover:scale-110 bg-[#C19EF9] justify-center flex items-center px-5 py-2 rounded-full space-x-4">
            <p className="text-lg font-bold">Post a Job</p>
            <AiFillPlusCircle className="text-xl" />
          </button>
        </div>
        <ListOfSuperInterns />
      </div>
    </div>
  );
};

export default HireIntern;

const InternCard = ({ text, animateJSON, internChecked, setInternChecked }) => (
  <div
    className={`border-2 p-3 rounded-lg ${
      internChecked === text
        ? "border-[#FDBC46] shadow-xl shadow-[#FDBC46]"
        : "border-[#D0B2FF]"
    }`}
  >
    <input
      id="intern-type"
      type="checkbox"
      className={styles.checkBox}
      onChange={(e) => setInternChecked(text)}
      checked={internChecked === text}
    />
    <div className="flex flex-col items-center">
      <div>
        <Lottie
          options={{ animationData: animateJSON }}
          height={200}
          width={200}
        />
      </div>
      <div
        style={{ fontFamily: "Lato" }}
        className="text-[#FC9536] font-bold text-xl"
      >
        {text}
      </div>
    </div>
  </div>
);
