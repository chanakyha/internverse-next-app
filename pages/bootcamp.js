import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BountyCard } from "./bounties";

const styles = {
  wrapper: "pt-[9%] px-7 mx-7 mb-5",
  headerText: "text-3xl text-[#D8C1FC]",
  categoryCardWrapper: "border p-5 border-[#F9AC21] rounded-lg shadow-2xl",
  categoryImage: "",
  cardBootcampContainer: "grid grid-cols-3",
  cardContainer: "flex items-center justify-center space-x-[5%] mt-7",
};

const data = [
  {
    type: "devlopment",
    title: "React.Js/Next.Js Frontend",
    content:
      "Lorem velit ex ut tempor voluptate voluptate pariatur ipsum occaecat esse aute officia.",
    price: "0.02",
  },
  {
    type: "cybersecurity",
    title: "Ethical Hacking",
    content:
      "Lorem velit ex ut tempor voluptate voluptate pariatur ipsum occaecat esse aute officia.",
    price: "0.019",
  },
  {
    type: "designing",
    title: "UI/UX using Figma",
    content:
      "Lorem velit ex ut tempor voluptate voluptate pariatur ipsum occaecat esse aute officia.",
    price: "0.013",
  },
  {
    type: "blockchain",
    title: "NFTs and Smart Contracts",
    content:
      "Lorem velit ex ut tempor voluptate voluptate pariatur ipsum occaecat esse aute officia.",
    price: "0.03",
  },
];

const content = [
  "Blockchain",
  "Community",
  "Content",
  "CyberSecurity",
  "Designing",
  "Development",
];

const Bootcamp = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Bootcamp</title>
      </Head>
      <div
        style={{ fontFamily: "PilatExtended" }}
        className={styles.headerText}
      >
        Get Trained In
      </div>
      <div className={styles.cardContainer}>
        {content.map((e, i) => (
          <CategoryCard key={i} image={e + ".png"} />
        ))}
      </div>
      <div
        className={styles.headerText + " mt-[5%]"}
        style={{ fontFamily: "PilatExtended" }}
      >
        Bootcamp with Guaranteed Internship
      </div>
      <div className={styles.cardBootcampContainer}>
        {data.map((course, index) => (
          <BountyCard
            key={index}
            companyName={course.title}
            content={course.content}
            seatsLeft={course.price}
            bootcamp={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Bootcamp;

const CategoryCard = ({ image }) => (
  <button className={styles.categoryCardWrapper}>
    <div className={styles.categoryImage}>
      <Image
        height={204}
        width={154}
        src={require(`../assets/images/${image}`)}
      />
    </div>
  </button>
);
