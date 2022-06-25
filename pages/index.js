import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import InternverseGradient from "../components/InternverseGradient";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Gradient from "rgt";

const styles = {
  wrapper: "",
  mainContent: "",
  content1: "m-5 p-5 mx-[6%] mt-[13%]",
  title: "font-bold text-6xl text-white space-y-2",
  subtitle: "text-white font-bold mt-3 space-y-3",
  button:
    "my-[5%] mx-5 bg-[#F9AC21] w-[160px] rounded-full outline outline-2 px-4 py-2 shadow-xl cursor-pointer",
  buttonContent: "text-center font-bold text-lg flex items-center space-x-3",
  heading: "text-white text-xl font-bold flex items-end space-x-2",
  hireTalentContent: "flex border-black justify-center py-[4%] ",
  right: "mr-[5%]",
};

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.homeContent}>
        <div className={styles.hireTalentContent}>
          <div className={styles.left}>
            <div className={styles.content1}>
              <div className="absolute left-0 top-12">
                <Image src={require("../assets/images/ellipse1.png")} />
              </div>
              <div className={styles.title}>
                <p>Looking for some great talent to work with you ?</p>
              </div>
              <div className={styles.subtitle}>
                We at <InternverseGradient /> help you in getting the perfect
                intern.
              </div>
              <div className={styles.button}>
                <div className={styles.buttonContent}>
                  <p className="cursor-pointer">Hire Talent</p>
                  <BsFillArrowRightCircleFill />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className="absolute top-0">
              <Image src={require("../assets/images/ellipse5.png")} />
            </div>
            <Image
              width={500}
              height={500}
              src={require("../assets/images/future1.png")}
            />
          </div>
        </div>
      </div>
      <div className={styles.homeContent}>
        <div className={styles.hireTalentContent}>
          <div className={styles.left}>
            <div className="absolute top-[690px]">
              <Image src={require("../assets/images/ellipse1.png")} />
            </div>
            <Image
              width={700}
              height={700}
              src={require("../assets/images/superhero1.png")}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.content1}>
              <div className="absolute right-0 top-[690px]">
                <Image src={require("../assets/images/ellipse5.png")} />
              </div>
              <div className={styles.title}>
                <p>Want to Monetize your Skills ?</p>
              </div>
              <div className={styles.subtitle}>
                Get Hired at <InternverseGradient />
              </div>
              <div className={styles.button}>
                <div className={styles.buttonContent}>
                  <AiFillCheckCircle />
                  <p>Apply Now</p>
                </div>
              </div>
              <div className={styles.heading}>
                <p>Join our</p>
                <span className="text-3xl underline decoration-[#F9AC21]">
                  STAR INTERN PROGRAM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeContent}>
        <div className={styles.hireTalentContent}>
          <div className={styles.left}>
            <div className={styles.content1}>
              <div className="absolute left-0">
                <Image src={require("../assets/images/ellipse1.png")} />
              </div>
              <div className={styles.title}>
                <div>Get hired in WEB 3.0!</div>
              </div>
              <div className={styles.subtitle}>Placement in Web3 Ecosystem</div>
              <div className="my-[5%] mx-5 bg-[#F9AC21] w-[220px] rounded-full outline outline-2 px-4 py-2 shadow-xl">
                <div className={styles.buttonContent}>
                  <p>Find Companies</p>
                  <BsFillArrowRightCircleFill />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className="absolute right-0 top-[1440px]">
              <Image src={require("../assets/images/ellipse5.png")} />
            </div>
            <Image
              width={400}
              height={400}
              src={require("../assets/images/hologram1.png")}
            />
          </div>
        </div>
      </div>
      <div className={styles.homeContent}>
        <div className={styles.hireTalentContent}>
          <div className={styles.right}>
            <div className="absolute right-0 top-[690px]">
              <Image src={require("../assets/images/ellipse5.png")} />
            </div>
            <div className="flex items-center justify-between w-full">
              <CircleComponent image="bolt.png" text="BOUNTIES" />
              <CircleComponent image="fire.png" text="CONTEST" />
              <CircleComponent image="rocket.png" text="MISSIONS" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

const CircleComponent = ({ image, text }) => (
  <div className="flex flex-col justify-center items-center">
    <Image src={require("../assets/images/" + image)} />
    <p className="text-2xl font-bold">
      <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
        {text}
      </Gradient>
    </p>
  </div>
);
