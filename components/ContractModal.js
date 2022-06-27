import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import nftabi from "../lib/NFTabi.json";
import { ethers } from "ethers";
import { AiFillCloseSquare } from "react-icons/ai";
import { Router } from "next/router";

const ContractModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleTransfer = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(
      "0x589358843244d824D591d1e60Ee6d3A9C94355a8",
      nftabi,
      signer
    );
    await erc20.mint(
      data.get("name"),
      data.get("skill1"),
      data.get("skill2"),
      data.get("skill3")
    );
  };

  const [isNFTCreated, setIsNFTCreated] = useState(false);

  const handleSubmit = (e) => {
    toast.promise(handleTransfer(e), {
      loading: "Minting in Progress...",
      success: () => {
        setIsNFTCreated(true);
        return <b>NFT is created Successfully</b>;
      },
      error: <b>Error occured in Minting</b>,
    });
  };
  return (
    <Modal
      isOpen={isModalOpen}
      style={{
        content: {
          zIndex: "999",
          position: "fixed",
          backgroundColor: "#1B0442",
        },
      }}
      overlayClassName="bg-black"
      contentLabel="Example Modal"
    >
      <ModalCloseBtn setIsModalOpen={setIsModalOpen} />
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="w-[1400px]">
            <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
              <div className="mt-4 p-4">
                <h1 className="text-xl font-semibold text-gray-700 text-center">
                  InternVerse NFT
                </h1>

                <form className="p-5" onSubmit={handleSubmit}>
                  <div className="my-3">
                    <input
                      type="text"
                      name="name"
                      className="p-3 rounded-lg mb-2 block w-full focus:ring focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="my-3">
                    <input
                      type="text"
                      name="skill1"
                      className="p-3 rounded-lg mb-2 block w-full focus:ring focus:outline-none"
                      placeholder="Skill #1"
                    />
                  </div>
                  <div className="my-3">
                    <input
                      type="text"
                      name="skill2"
                      className="p-3 rounded-lg mb-2 block w-full focus:ring focus:outline-none"
                      placeholder="Skill #2"
                    />
                  </div>
                  <div className="my-3">
                    <input
                      type="text"
                      name="skill3"
                      className="p-3 rounded-lg mb-2 block w-full focus:ring focus:outline-none"
                      placeholder="Skill #3"
                    />
                  </div>
                  <footer className="p-4">
                    <button
                      type="submit"
                      className="btn font-bold bg-[#783ff9] text-white px-4 py-4 rounded-lg btn-primary submit-button focus:ring focus:outline-none w-full"
                    >
                      Mint
                    </button>
                  </footer>
                </form>
                <button
                  onClick={() =>
                    (location.href =
                      "https://testnets.opensea.io/collection/internversetest-zuw29unlq8")
                  }
                  className={
                    !isNFTCreated
                      ? "hidden"
                      : "" +
                        " mt-5 font-bold btn bg-[#783ff9] text-white px-4 py-4 rounded-lg btn-primary submit-button focus:ring focus:outline-none w-full"
                  }
                >
                  View your NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContractModal;

const ModalCloseBtn = ({ setIsModalOpen }) => (
  <button
    onClick={() => setIsModalOpen(false)}
    className="absolute mx-5 right-0 text-5xl hover:scale-110"
  >
    <AiFillCloseSquare fill="#6548A3" />
  </button>
);
