import React from "react";
import Gradient from "rgt";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const styles = {
  wrapper: " p-5 m-5 h-[100px] flex justify-between text-white",
  left: "flex flex-col justify-center items-center",
  right: "flex flex-col items-center space-y-2",
  socialIcons: "text-2xl fill-[#FDBC46] hover:scale-150 ease-in-out",
};

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className="text-3xl font-bold">
          {/* <InternverseGradient /> */}
          <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
            InternVERSE
          </Gradient>
        </div>
        <h2 className="text-white text-xs">The Universe of Opportunities</h2>
      </div>
      <div className={styles.right}>
        <h2 className="font-bold text-md">Follow us on ! </h2>
        <div className="flex space-x-3">
          <AiFillLinkedin className={styles.socialIcons} />
          <AiFillTwitterCircle className={styles.socialIcons} />
          <AiFillInstagram className={styles.socialIcons} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
