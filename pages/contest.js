import Image from "next/image";
import React, { useState } from "react";
import InternverseGradient from "../components/InternverseGradient";
import { BiSearchAlt2 } from "react-icons/bi";

const sampleData = [
  {
    title: "Testnet Bug Bounty",
    image: "companyImage.png",
    content:
      "Report bugs and issues in our newly launched testnet platform for crypto trading. ",
    points: "100 USDT",
    state: "🌎",
    days: "in 14 days",
  },
  {
    title: "Bricks Protocol",
    image: "companyImage.png",
    content:
      "Exercitation cupidatat proident do officia eiusmod minim esse enim id nostrud.",
    points: "100 USDT",
    state: "🌎",
    days: "in 20 days",
  },
  {
    title: "Dashboard: Raydium AcceleRaytor ",
    image: "companyImage.png",
    content:
      "Raydium is an automated market maker (AMM) built on the Solana blockchain which leverages the central order book of the Serum decentralised exchange (DEX).",
    points: "3000 USDC",
    state: "📶",
    days: "in 24 days",
  },
  {
    title: "NFT memes with Wall.app",
    image: "companyImage.png",
    content: "Make memes on NFTs and post them on Twitter. ",
    points: "50 USDC",
    state: "🌎",
    days: "in 3 days",
  },
  {
    title: "Make Short Articles",
    image: "companyImage.png",
    content:
      "Make recap-style short articles for The Merge Twitter Space series",
    points: "40 USDC",
    state: "✍️",
    days: "in 9 days",
  },
  {
    title: "Make Twitter Threads",
    image: "companyImage.png",
    content: "Make recap threads for The Merge Twitter Space series",
    points: "20 USDC",
    state: "🌎",
    days: "in 12 days",
  },
  {
    title: "Bricks Protocol Meme Contest",
    image: "companyImage.png",
    content:
      "Use your creative skills to create fun and informative memes on Bricks Protocol.",
    points: "50 MATIC",
    state: "🎥",
    days: "in 7 days",
  },
  {
    title: "QuickSwap",
    image: "companyImage.png",
    content: "Velit cupidatat magna consectetur ea anim consectetur.",
    points: "100 USDT",
    state: "✍️",
    days: "in 7 days",
  },
  {
    title: "GCR’s Monthly Research",
    image: "companyImage.png",
    content: "Research and write on select monthly project.",
    points: "163 GCR",
    state: "✍️",
    days: "in 10 days",
  },
  {
    title: "GCR deal-a-thon",
    image: "companyImage.png",
    content: "Help GCR source its next deal!",
    points: "624 GCR",
    state: "🏢",
    days: "in 10 days",
  },
  {
    title: "Notional Blitz #6 ",
    image: "companyImage.png",
    content:
      "Analyze Notional data to help educate the community and awareness around Notional's new historical data tool.",
    points: "1200 NOTE",
    state: "📶",
    days: "in 13 days",
  },
  {
    title: "ZetaChain Video Contest",
    image: "companyImage.png",
    content: "A multi-language video contest on ZetaChain! ",
    points: "100 USDC",
    state: "🎥",
    days: "in 16 days",
  },
  {
    title: "Media Mining",
    image: "companyImage.png",
    content: "Write articles and post on GCR website",
    points: "50 GCR",
    state: "❔",
    days: "in 6 days",
  },
  {
    title: "Dexe Network",
    image: "companyImage.png",
    content:
      "Submit a DeXe Improvement Proposal (DIP) to the DeXe Network Governance Forum",
    points: "75 DEXE",
    state: "🧑‍🔬",
    days: "in 11 days",
  },
  {
    title: "PRO Project Designing",
    image: "companyImage.png",
    content: "Design a project to the PRO Project Designers",
    points: "125 PRO",
    state: "🎨",
    days: "in 11 days",
  },
];

const styles = {
  wrapper: "pt-[9%] p-5 m-5 mt-0 flex justify-center items-center flex-col",
  headerTitle: "text-[#D8C1FC] text-4xl mt-5",
  tabs: "flex font-bold mt-[3%] space-x-5",
  cardWrapper:
    "bg-[#1B0442] shadow-2xl p-5 m-[7%] mt-[0%] flex flex-col justify-between rounded-lg",
  cardContainer: "grid grid-cols-3 m-5 h-full",
  header: "flex items-center space-x-5 text-[#6E4ABD] font-bold text-2xl",
  content: "p-5 text-[#DCCDF4] text-lg",
  points:
    "text-[#FC9536] text-lg rounded-full font-bold flex justify-between px-5",
  search:
    "text-[#6E4ABD] bg-[#D8C1FC] focus:outline-0 text-lg flex mt-[3%] items-center px-3 w-[90%] rounded-lg",
  searchBar: "bg-[#D8C1FC] p-2 pb-2.5  placeholder-[#6E4ABD] w-[80%]",
};

const Contest = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={styles.wrapper}>
      <div
        style={{ fontFamily: "PilatExtended" }}
        className={styles.headerTitle}
      >
        Compete with other contributors and win{" "}
        <InternverseGradient text="prizes" />
      </div>
      <div className={styles.tabs}>
        <button
          onClick={() => setActiveTab("all")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "all"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("🌎")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "🌎"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Social
        </button>
        <button
          onClick={() => setActiveTab("❔")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "❔"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Q&A
        </button>
        <button
          onClick={() => setActiveTab("🎨")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "🎨"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Design
        </button>
        <button
          onClick={() => setActiveTab("🧑‍🔬")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "🧑‍🔬"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Engineering
        </button>
        <button
          onClick={() => setActiveTab("🎥")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "🎥"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setActiveTab("✍️")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "✍️"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Writing
        </button>
        <button
          onClick={() => setActiveTab("🏢")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "🏢"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Recruiting
        </button>
        <button
          onClick={() => setActiveTab("📶")}
          style={{ fontFamily: "PilatExtended" }}
          className={`text-xl ${
            activeTab == "📶"
              ? "text-[#FDBC46] underline underline-offset-8 underline-[#FDBC46]"
              : "text-[#6548A3]"
          }`}
        >
          Analytics
        </button>
      </div>
      <div className={styles.search}>
        <BiSearchAlt2></BiSearchAlt2>
        <input
          type="text"
          style={{ outline: "none" }}
          placeholder="Search contests"
          className={styles.searchBar}
        />
      </div>
      <div className={styles.cardContainer}>
        {sampleData.map((data, index) => {
          if (data.state === activeTab || activeTab === "all") {
            return (
              <ContestCard
                key={index}
                image={data.image}
                companyName={data.title}
                content={data.content}
                points={data.points}
                type={data.state}
                days={data.days}
              />
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
};

export default Contest;

const ContestCard = ({ image, companyName, content, points, type, days }) => (
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
      <div className={styles.points}>
        <p>
          {type} {days}
        </p>{" "}
        <p>{points}</p>
      </div>
    </div>
  </>
);
