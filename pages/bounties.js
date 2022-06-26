import Image from "next/image";
import React, { useState } from "react";
import InternverseGradient from "../components/InternverseGradient";

const sampleData = [
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content: "Ad ullamco excepteur reprehenderit ullamco.",
    seats: 200,
    seatsOccupies: 50,
    state: "active",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content:
      "Exercitation cupidatat proident do officia eiusmod minim esse enim id nostrud.",
    seats: 200,
    seatsOccupies: 50,
    state: "active",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content:
      "Culpa quis proident consequat ut Lorem magna pariatur do sint cupidatat.",
    seats: 200,
    seatsOccupies: 50,
    state: "missed",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content:
      "Culpa quis proident consequat ut Lorem magna pariatur do sint cupidatat.",
    seats: 200,
    seatsOccupies: 50,
    state: "missed",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content:
      "Culpa quis proident consequat ut Lorem magna pariatur do sint cupidatat.",
    seats: 200,
    seatsOccupies: 50,
    state: "missed",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content: "Velit cupidatat magna consectetur ea anim consectetur.",
    seats: 200,
    seatsOccupies: 50,
    state: "active",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content: "Velit cupidatat magna consectetur ea anim consectetur.",
    seats: 200,
    seatsOccupies: 50,
    state: "active",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content:
      "Anim cupidatat laborum cupidatat dolor ut ipsum et officia fugiat eiusmod.",
    seats: 200,
    seatsOccupies: 50,
    state: "missed",
  },
];

const styles = {
  wrapper: "pt-[9%] p-5 m-5 mt-0 flex justify-center items-center flex-col",
  headerTitle: "text-[#D8C1FC] text-4xl mt-5",
  tabs: "flex font-bold mt-[3%] space-x-5",
  cardWrapper:
    "bg-[#1B0442] shadow-2xl p-5 m-[7%] flex flex-col justify-between rounded-lg",
  cardContainer: "grid grid-cols-3 m-5 h-full",
  header: "flex items-center space-x-5 text-[#6E4ABD] font-bold text-2xl",
  content: "p-5 text-[#DCCDF4] text-lg",
  seatLeft:
    "text-[#FC9536] text-lg rounded-full font-bold flex justify-between px-5",
};

const Bounties = () => {
  const [activeTab, setActiveTab] = useState("missed");

  return (
    <div className={styles.wrapper}>
      <div
        style={{ fontFamily: "PilatExtended" }}
        className={styles.headerTitle}
      >
        Instantly earn crypto by Discovering{" "}
        <InternverseGradient text="WEB 3" />
      </div>
      <div className={styles.tabs}>
        <button
          onClick={() => setActiveTab("missed")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-2xl ${
            activeTab !== "active"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveTab("active")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-2xl ${
            activeTab !== "missed"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Missed
        </button>
      </div>
      <div className={styles.cardContainer}>
        {sampleData.map((data, index) => {
          if (data.state === activeTab) {
            return;
          } else {
            return (
              <BountyCard
                key={index}
                image={data.image}
                companyName={data.title}
                content={data.content}
                seatsLeft={data.seats - data.seatsOccupies}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Bounties;

const BountyCard = ({ image, companyName, content, seatsLeft }) => (
  <>
    <div className={styles.cardWrapper}>
      <div className={styles.header}>
        <div className={styles.companyImage}>
          <Image src={require(`../assets/images/${image}`)} />
        </div>
        <div
          style={{ fontFamily: "PilatExtended" }}
          className={styles.companyName}
        >
          {companyName}
        </div>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.seatLeft}>
        <p style={{ fontFamily: "PilatExtended" }}>Seats Left</p>{" "}
        <p>{seatsLeft}</p>
      </div>
    </div>
  </>
);
