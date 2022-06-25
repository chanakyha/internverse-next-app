import React from "react";
import Image from "next/image";
import BannerPNG from "../assets/images/banner.png";
import Link from "next/link";
import InternForm from "../components/InternForm";
import InternTearms from "../components/InternTearms";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const styles = {
  wrapper: "w-screen h-full",
  banner: "hidden md:inline-block w-screen h-[200px]",
  content: "m-5 px-5",
  title: "font-bold text-2xl text-white",
  subtitle: "bg-[#FDBC46] p-5 mt-3 rounded-md text-lg",
  link: "text-zinc-200",
  mainContent: "m-5 px-5 mt-[5%] flex items-start justify-between",
};

const StarIntern = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.banner}>
        <Image
          className={styles.banner}
          height={200}
          src={BannerPNG}
          alt="the-banner"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Be a Super Intern</h2>
        <h3 className={styles.subtitle}>
          <span className="font-bold text-xl">Want to Earn? </span>
          Check out Internship Opening on <Link href="/">Job board</Link>{" "}
          freelance work and <Link href="/">Bounties</Link>
        </h3>
      </div>
      <div className={styles.mainContent}>
        <InternForm />
        <InternTearms />
      </div>
      <Footer />
    </div>
  );
};
export default StarIntern;
