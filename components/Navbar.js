import React from "react";
import Gradient from "rgt";
import Router from "next/router";

const styles = {
  wrapper: "fixed w-screen bg-[#1B0442] z-[1] shadow-2xl",
  left: "",
  right: "flex text-[#6E2DD3] space-x-10 text-xl font-bold",
  connectWalletBtn:
    "cursor-pointer text-[#F9AC21] outline outline-[#F9AC21] px-3 p-2 rounded-full",
  navItem: "cursor-pointer p-2",
};

const Navbar = ({ connectWallet, walletAddress }) => {
  return (
    <div className={styles.wrapper}>
      <div className="mx-5 p-5 mb-4 flex flex justify-between items-center">
        <div className={styles.left}>
          <div
            onClick={() => Router.push("/")}
            className="cursor-pointer text-3xl"
          >
            <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
              InternVerse
            </Gradient>
          </div>
        </div>
        <div className={styles.right}>
          <div
            onClick={() => Router.push("/bounties")}
            className={styles.navItem}
          >
            Bounties
          </div>
          <div
            onClick={() => Router.push("/contest")}
            className={styles.navItem}
          >
            Contest
          </div>
          <div className={styles.navItem}>Mission</div>
          {walletAddress[0] ? (
            <div className={styles.connectWalletBtn}>
              {walletAddress[0].slice(0, 6) +
                "..." +
                walletAddress[0].slice(-4)}
            </div>
          ) : (
            <div onClick={connectWallet} className={styles.connectWalletBtn}>
              Connect Wallet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
