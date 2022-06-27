import React, { useState, useEffect } from "react";
import CountrySelector from "./CountrySelect";
import Select from "react-select";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { db, setDoc, doc } from "../lib/firebase";
import ContractModal from "./ContractModal";
import Web3 from "web3";

const styles = {
  wrapper: "overflow-y-auto rounded-md",
  header: "font-bold text-3xl text-white",
  formContent: "bg-[#3A3366] p-5 my-2 rounded-md",
  inputContainer: "my-3 flex flex-col space-y-2",
  title: "font-bold text-[#DCCDF4]",
  subtitle: "text-[#8B77AA] opacity-2",
  dropdownItems: "",
  input: "border w-full p-1 rounded-sm bg-[#DCCDF4]",
  redStar: "text-red-500",
  radioContainer: "text-[#8B77AA] flex items-center justify-start",
};

const InternForm = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "Chanakyha",
    location: "India",
    email: "vetrichanakyha2003@gmail.com",
    workType: "Actively Looking for full time positions",
    skills: "Frontend Development",
  });

  const uploadDoc = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    setFormData({
      name: data.get("name"),
      email: data.get("email"),
    });

    if (
      !formData.name &&
      !formData.location &&
      !formData.email &&
      !formData.workType &&
      !formData.skills
    ) {
      return;
    }
    setDoc(doc(db, "users", walletAddress[0]), formData, { merge: true });
    setIsModalOpen(true);
    console.log(walletAddress[0]);
  };

  return (
    <div className={styles.wrapper}>
      <ContractModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className={styles.header}>Find Work Opportunities in Web3</div>
      <div className={styles.formContent}>
        <form onSubmit={uploadDoc}>
          <InputComponent
            title={"Name"}
            subtitle={"What's your Name ?"}
            Input={() => <input name="name" className={styles.input} />}
          />
          <InputComponent
            title={"Location"}
            subtitle={"Where are you generally based out of?"}
            Input={() => <CountrySelector />}
          />
          <InputComponent
            title={"What's your email address?"}
            subtitle={
              "We'll send opportunities to this email, so make sure its one you check often"
            }
            Input={() => <input name="email" className={styles.input} />}
          />
          <InputComponent
            title={"What kind of work are you looking for?"}
            subtitle={"Select all that apply"}
            Input={() => (
              <Select
                name="workType"
                options={[
                  {
                    label: "Actively Looking for full time positions",
                    value: "Actively Looking for full time positions",
                  },
                  {
                    label: "Passively Looking for full time positions",
                    value: "Passively Looking for full time positions",
                  },
                  {
                    label: "Actively Looking for Freelance work",
                    value: "Actively Looking for Freelance work",
                  },
                  {
                    label: "Passively Looing for Freelance work",
                    value: "Passively Looing for Freelance work",
                  },
                  {
                    label: "Actively Looking for Internships",
                    value: "Actively Looking for Internships",
                  },
                ]}
              />
            )}
          />
          <InputComponent
            title={"What skills do you have?"}
            subtitle={"Choose your top 3"}
            Input={() => (
              <Select
                name="skills"
                options={[
                  {
                    label: "Community Management",
                    value: "Community Management",
                  },
                  {
                    label: "DataScience/Analytics",
                    value: "DataScience/Analytics",
                  },
                  { label: "Devops", value: "Devops" },
                  {
                    label: "Frontend Development",
                    value: "Frontend Development",
                  },
                  {
                    label: "Backend Development",
                    value: "Backend Development",
                  },
                  {
                    label: "Fullstack Development",
                    value: "Fullstack Development",
                  },
                  { label: "Mobile Development", value: "Mobile Development" },
                  { label: "Graphic Design", value: "Graphic Design" },
                  { label: "Product Management", value: "Product Management" },
                  { label: "UI/UX design", value: "UI/UX design" },
                  {
                    label: "Video/Animation/Editing",
                    value: "Video/Animation/Editing",
                  },
                  { label: "Game Designer", value: "Game Designer" },
                ]}
              />
            )}
          />
          <InputComponent
            title={"What areas of Web3 are you interested in?"}
            subtitle={"Select all that apply"}
            Input={() => (
              <div className="flex flex-col">
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  DeFi
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  Social Tokens
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  DAOs/DAO Tooling
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  DAOs/DAO Tooling
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  DAOs/DAO Tooling
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  GameFi/Play to Earn
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  NFTs
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  Payments/Stablecoins
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  Web3 Infrastructure
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  Consumer dApps
                </div>
                <div className={styles.radioContainer}>
                  <input type="radio" className="mr-2" />
                  Others
                </div>
              </div>
            )}
          />
          <button
            style={{ fontFamily: "PilatExtended" }}
            type="submit"
            className="mt-5 bg-[#F9AC21] px-4 py-2 shadow-xl rounded-full flex justify-center items-center space-x-3 hover:scale-110"
          >
            <p>Submit</p>
            <BsFillArrowRightCircleFill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InternForm;

const InputComponent = ({ title, subtitle, Input }) => (
  <div className={styles.inputContainer}>
    <div className={styles.title}>
      {title} <span className={styles.redStar}>*</span>
    </div>
    <div className={styles.subtitle}>{subtitle}</div>
    <Input />
  </div>
);
