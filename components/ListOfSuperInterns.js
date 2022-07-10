import Image from "next/image";
import Router from "next/router";
import React from "react";
const styles = {
  wrapper: "h-full mt-5",
  headerTitle: "text-[#D0B2FF] text-4xl font-bold mb-5 rounded-lg",
  cardWrapper:
    "flex items-center justify-between m-5 p-5 bg-[#1B0442] shadow-2xl rounded-full px-[4%]",
  left: "flex items-center space-x-5",
  button:
    "hover:scale-110 bg-[#FDBC46] px-5 py-2 rounded-full font-bold shadow-2xl",
  cardContainer: "h-[600px] overflow-y-auto",
};

const ListOfSuperInterns = () => {
  return (
    <div className="">
      <div className="z-[-1] fixed left-0 top-0">
        <Image src={require("../assets/images/glow.png")} />
      </div>
      <div className="z-[-1] fixed right-0 bottom-0">
        <Image src={require("../assets/images/glow-right.png")} />
      </div>
      <div className={styles.wrapper}>
        <div
          style={{ fontFamily: "PilatExtended" }}
          className={styles.headerTitle}
        >
          List of SuperInterns
        </div>
        <div className={styles.cardContainer}>
          <SuperInterns image="nftFace.png" name="Lorem ipsum" />
          <SuperInterns image="nftFace.png" name="Lorem ipsum" />
          <SuperInterns image="nftFace.png" name="Lorem ipsum" />
          <SuperInterns image="nftFace.png" name="Lorem ipsum" />
          <SuperInterns image="nftFace.png" name="Lorem ipsum" />
          <SuperInterns image="nftFace.png" name="Lorem ipsum" />
          <SuperInterns image="nftFace.png" name="Lorem ipsum" />
        </div>
      </div>
    </div>
  );
};

export default ListOfSuperInterns;

const SuperInterns = ({ image, name }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.left}>
      <div>
        <Image src={require(`../assets/images/${image}`)} />
      </div>
      <p
        style={{ fontFamily: "PilatExtended" }}
        className="font-bold text-[#A38AC8] text-xl"
      >
        {name}
      </p>
    </div>
    <div className={styles.right}>
      <button
        onClick={() => Router.push("https://linktree.chanakyha-coder.xyz")}
        className={styles.button}
      >
        Connect
      </button>
    </div>
  </div>
);
