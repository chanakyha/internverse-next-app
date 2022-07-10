import Head from "next/head";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Web3 from "web3";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [walletAddress, setWalletAddress] = useState("");

  const checkConnection = async () => {
    let web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    }

    // Check if User is already connected by retrieving the accounts
    web3.eth.getAccounts().then(async (addr) => {
      setWalletAddress(addr);
    });
  };

  useEffect(() => {
    checkConnection();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (window.ethereum) {
      //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        const obj = {
          connectedStatus: true,
          status: "",
          address: address,
        };
        return obj;
      } catch (error) {
        return {
          connectedStatus: false,
          status: "🦊 Connect to Metamask using the button on the top right.",
        };
      }
    } else {
      return {
        connectedStatus: false,
        status:
          "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
      };
    }
  };
  return (
    <>
      <Head>
        <title>InternVERSE</title>
        <link rel="icon" href="./NavLogo.png" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar walletAddress={walletAddress} connectWallet={connectWallet} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
