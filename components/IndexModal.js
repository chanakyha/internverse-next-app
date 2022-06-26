import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import Modal from "react-modal";
import InternverseGradient from "./InternverseGradient";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Router from "next/router";

const styles = {
  wrapper: "px-5 flex flex-col items-center justify-center mt-[4%]",
  headerTitle: "text-white text-5xl",
  image: "",
  content: "space-y-2",
  title: "text-[#C19EF9] text-5xl font-bold",
  subContent: "text-[#A38AC8] mr-[20%]",
};

const IndexModal = ({ isModalOpen, setIsModalOpen }) => {
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
      <div className={styles.wrapper}>
        <div
          style={{ fontFamily: "PilatExtended" }}
          className={styles.headerTitle}
        >
          Why to hire from <InternverseGradient /> ?
        </div>
        <div className="">
          <ProgressCard
            image="personSearch.png"
            title="Talent Search"
            content="Anim est nostrud nostrud quis laborum velit ut eiusmod aute in duis nostrud sunt. Eiusmod in do ut ea est labore in reprehenderit culpa exercitation ex. Exercitation ad exercitation ut cillum occaecat elit ullamco anim commodo mollit fugiat ut nostrud proident. Est fugiat in Lorem ullamco exercitation commodo ullamco non voluptate qui duis in ad aute. Tempor non fugiat aute veniam excepteur et."
          />
          <ProgressCard
            image="tick.png"
            title="Profile Verification"
            content="Anim est nostrud nostrud quis laborum velit ut eiusmod aute in duis nostrud sunt. Eiusmod in do ut ea est labore in reprehenderit culpa exercitation ex. Exercitation ad exercitation ut cillum occaecat elit ullamco anim commodo mollit fugiat ut nostrud proident. Est fugiat in Lorem ullamco exercitation commodo ullamco non voluptate qui duis in ad aute. Tempor non fugiat aute veniam excepteur et."
          />
          <ProgressCard
            image="fileTick.png"
            title="Proof of Work"
            content="Anim est nostrud nostrud quis laborum velit ut eiusmod aute in duis nostrud sunt. Eiusmod in do ut ea est labore in reprehenderit culpa exercitation ex. Exercitation ad exercitation ut cillum occaecat elit ullamco anim commodo mollit fugiat ut nostrud proident. Est fugiat in Lorem ullamco exercitation commodo ullamco non voluptate qui duis in ad aute. Tempor non fugiat aute veniam excepteur et."
          />
          <ProgressCard
            image="person.png"
            title="Interview"
            content="Anim est nostrud nostrud quis laborum velit ut eiusmod aute in duis nostrud sunt. Eiusmod in do ut ea est labore in reprehenderit culpa exercitation ex. Exercitation ad exercitation ut cillum occaecat elit ullamco anim commodo mollit fugiat ut nostrud proident. Est fugiat in Lorem ullamco exercitation commodo ullamco non voluptate qui duis in ad aute. Tempor non fugiat aute veniam excepteur et."
          />
        </div>
        <div className="flex items-center my-[5%] mx-5 bg-[#F9AC21] w-[180px] rounded-full px-4 py-2 shadow-xl cursor-pointer space-x-2 hover:scale-105 ease-in-out">
          <button
            onClick={() => Router.push("/hire-intern")}
            className="text-center font-bold text-lg flex items-center space-x-3"
          >
            Hire Talent
          </button>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </Modal>
  );
};

export default IndexModal;

const ModalCloseBtn = ({ setIsModalOpen }) => (
  <button
    onClick={() => setIsModalOpen(0)}
    className="absolute mx-5 right-0 text-5xl hover:scale-110"
  >
    <AiFillCloseSquare fill="#6548A3" />
  </button>
);

const ProgressCard = ({ image, title, content }) => (
  <div className="flex items-center px-5 my-5">
    <div className={styles.image}>
      <Image
        height={1200}
        width={1200}
        src={require(`../assets/images/${image}`)}
      />
    </div>
    <div className={styles.content}>
      <h1 style={{ fontFamily: "PilatExtended" }} className={styles.title}>
        {title}
      </h1>
      <p style={{ fontFamily: "Lato" }} className={styles.subContent}>
        {content}
      </p>
    </div>
  </div>
);
