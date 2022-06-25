import React from "react";
import Gradient from "rgt";

const styles = {
  wrapper:
    "mx-5 p-5 flex flex justify-between items-center border-[#A38AC8] border-b-2 mb-4",
  left: "",
  right: "flex text-[#6E2DD3] space-x-10 text-xl font-bold",
  connectWalletBtn:
    "text-[#F9AC21] outline outline-[#F9AC21] px-3 p-2 rounded-full",
  navItem: "p-2",
};

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className="text-3xl">
          <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
            InternVerse
          </Gradient>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.navItem}>Bounties</div>
        <div className={styles.navItem}>Contest</div>
        <div className={styles.navItem}>Mission</div>
        <div className={styles.connectWalletBtn}>Connect Wallet</div>
      </div>
    </div>
  );
};

export default Navbar;
