import React from "react";
import * as FormCheckingAnimation from "../assets/animations/formChecking.json";
import * as FormFillingAnimation from "../assets/animations/formFilling.json";
import * as proofOfWorkAnimation from "../assets/animations/proofOfWork.json";
import * as interviewAnimation from "../assets/animations/interview.json";
import * as checkedAnimation from "../assets/animations/checked.json";
import Lottie from "react-lottie";

const styles = {
  wrapper: "w-1/2 overflow-y-auto h-[600px]",
  title: "font-bold text-2xl text-white",
  cardContainer: "ml-5",
  cardWrapper:
    "flex bg-[#F9AC21] px-3 m-3 rounded-md justify-center items-center drop-shadow-xl",
  contentWrapper: "flex flex-col ml-4",
  mainTitle: "font-bold text-md",
  content: "text-white",
};

const InternTearms = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Benefits of Joining the Superteam Talent Network
      </div>
      <div className={styles.cardContainer}>
        <Card
          animateJSON={FormFillingAnimation}
          title="Fill the Given Form"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
        <Card
          animateJSON={FormCheckingAnimation}
          title="Form is Checked"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
        <Card
          animateJSON={proofOfWorkAnimation}
          title="Proof of Work"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
        <Card
          animateJSON={interviewAnimation}
          title="Interview"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
        <Card
          animateJSON={checkedAnimation}
          title="Voila"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
      </div>
    </div>
  );
};

export default InternTearms;

const Card = ({ animateJSON, title, content }) => (
  <div className={styles.cardWrapper}>
    <Lottie options={{ animationData: animateJSON }} height={200} width={200} />
    <div className={styles.contentWrapper}>
      <div className={styles.mainTitle}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  </div>
);
