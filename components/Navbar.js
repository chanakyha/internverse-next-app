import React from "react";
import Gradient from "rgt";
import { useRouter } from "next/router";
import Image from "next/image";

const styles = {
  wrapper: "fixed w-screen bg-[#1B0442] z-[1] shadow-2xl",
  left: "",
  right: "flex text-[#6E2DD3] space-x-10 text-xl font-bold",
  connectWalletBtn:
    "cursor-pointer text-[#F9AC21] outline outline-[#F9AC21] px-3 p-2 rounded-full",
  navItem: "cursor-pointer p-2",
};

const Navbar = ({ connectWallet, walletAddress }) => {
  const Router = useRouter();
  const path = Router.pathname;
  return (
    <div className={styles.wrapper}>
      <div className="mx-5 p-5 mb-4 flex flex justify-between items-center">
        <div className={styles.left}>
          <div
            onClick={() => Router.push("/")}
            className="cursor-pointer text-3xl flex items-center gap-5"
          >
            <Image
              height={30}
              width={30}
              src={require("../assets/images/NavLogo.png")}
            />
            <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
              InternVerse
            </Gradient>
          </div>
        </div>
        <div className={styles.right}>
          <div
            onClick={() => Router.push("/bounties")}
            className={
              styles.navItem +
              ` ${path === "/bounties" ? "text-[#A672F6]" : ""}`
            }
          >
            Bounties
          </div>

          <div
            className={
              styles.navItem +
              ` ${path === "/bootcamp" ? "text-[#A672F6]" : ""}`
            }
            onClick={() => Router.push("/bootcamp")}
          >
            Bootcamp
          </div>
          <div
            onClick={() => Router.push("/contest")}
            className={
              styles.navItem + ` ${path === "/contest" ? "text-[#A672F6]" : ""}`
            }
          >
            Contest
          </div>
          <div
            onClick={() => Router.push("/courses")}
            className={
              styles.navItem + ` ${path === "/courses" ? "text-[#A672F6]" : ""}`
            }
          >
            Courses
          </div>
          <div
            onClick={() => Router.push("/getapp")}
            className={
              styles.navItem + ` ${path === "/getapp" ? "text-[#A672F6]" : ""}`
            }
          >
            Get App
          </div>
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
