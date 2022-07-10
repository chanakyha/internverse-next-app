import Router from "next/router";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { BountyCard } from "./bounties";

const courses = [
  {
    title: "Complete Web3.0 Bootcamp",
    nftImage: "nft.png",
    category: "Developer",
  },
  {
    title: "Frontend Bootcamp",
    nftImage: "nft.png",
    category: "Developer",
  },
  {
    title: "Solidity 3.000000",
    nftImage: "nft.png",
    category: "Blockchain",
  },
  {
    title: "Figma in 30days",
    nftImage: "nft.png",
    category: "Designer",
  },
  {
    title: "101 Community Management",
    nftImage: "nft.png",
    category: "Community",
  },
  {
    title: "Content Writing from scratch",
    nftImage: "nft.png",
    category: "Content",
  },
  {
    title: "Basics of Designing",
    nftImage: "nft.png",
    category: "Designer",
  },
  {
    title: "Basics of BlockChain",
    nftImage: "nft.png",
    category: "Blockchain",
  },
  {
    title: "Canva Basics",
    nftImage: "nft.png",
    category: "Designer",
  },
  {
    title: "web3.0 from Scratch",
    nftImage: "nft.png",
    category: "Developer",
  },
  {
    title: "101 Content Writing",
    nftImage: "nft.png",
    category: "Content",
  },
  {
    title: "how to manage a community",
    nftImage: "nft.png",
    category: "Community",
  },
  {
    title: "Building a community from scratch",
    nftImage: "nft.png",
    category: "Community",
  },
];

const styles = {
  wrapper: "",
  content: "pt-[8%] m-5 mt-0 p-5",
  headerTitle: "text-white text-6xl",
  cardContainer: "flex justify-between items-center mb-5 mt-[5%]",
  checkBox:
    "scale-150 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#FDBC46] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer relative right-0",
};

const Courses = () => {
  const [internChecked, setInternChecked] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div
          style={{ fontFamily: "PilatExtended" }}
          className={styles.headerTitle}
        >
          Buy our Courses
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
            text="Blockchain"
            animateJSON={require("../assets/animations/others.json")}
          />
        </div>
        <div className="flex justify-end"></div>
      </div>
      <div className="grid grid-cols-3">
        {courses.map((course, index) => {
          console.log(internChecked);
          if (internChecked != course.category) return;

          return (
            <BountyCard
              key={index}
              content={course.title}
              image={course.nftImage}
              courses={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

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
