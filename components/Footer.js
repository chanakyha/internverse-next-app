import React from "react";
import Gradient from "rgt";

const styles = {
  wrapper: "p-5 m-5 h-[100px] flex justify-between text-white",
  left: "flex flex-col justify-center items-center",
  right: "",
  gradient: "text-2xl",
};

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Gradient
          className={styles.gradient}
          dir="left-to-right"
          from="#F9AC21"
          to="#6B17EC"
        >
          InternVERSE
        </Gradient>
        <h2 className="text-white">The Universe of Opportunities</h2>
      </div>
      <div className={styles.right}>
        <h2>Follow us on:- </h2>
        <div>Instagram</div>
        <div>Twitter</div>
        <div>LinkedIn</div>
      </div>
    </div>
  );
};

export default Footer;
