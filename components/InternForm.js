import React from "react";
import CountrySelector from "./CountrySelect";
import Select from "react-select";

const styles = {
  wrapper: "overflow-y-auto h-[600px] rounded-md",
  header: "font-bold text-3xl text-white",
  formContent: "bg-[#fbfafa] p-5 my-2 rounded-md",
  inputContainer: "my-3 flex flex-col space-y-2",
  title: "font-bold",
  subtitle: "text-black opacity-2",
  dropdownItems: "",
  input: "border w-full p-1",
  redStar: "text-red-500",
  radioContainer: "flex items-center justify-start",
};

const InternForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Find Work Opportunities in Web3</div>
      <div className={styles.formContent}>
        <InputComponent
          title={"Name"}
          subtitle={"What's your Name ?"}
          Input={() => <input className={styles.input} />}
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
          Input={() => <input className={styles.input} />}
        />
        <InputComponent
          title={"What's your email address?"}
          subtitle={
            "We'll send opportunities to this email, so make sure its one you check often"
          }
          Input={() => <input className={styles.input} />}
        />
        <InputComponent
          title={"What kind of work are you looking for?"}
          subtitle={"Select all that apply"}
          Input={() => (
            <Select
              options={[
                { label: "Actively Looking for full time positions" },
                { label: "Passively Looking for full time positions" },
                { label: "Actively Looking for Freelance work" },
                { label: "Passively Looing for Freelance work" },
                { label: "Actively Looking for Internships" },
              ]}
            />
          )}
        />
        <InputComponent
          title={"What skills do you have?"}
          subtitle={"Choose your top 3"}
          Input={() => (
            <Select
              options={[
                { label: "Community Management" },
                { label: "DataScience/Analytics" },
                { label: "Devops" },
                { label: "Frontend Development" },
                { label: "Backend Development" },
                { label: "Fullstack Development" },
                { label: "Mobile Development" },
                { label: "Graphic Design" },
                { label: "Product Management" },
                { label: "UI/UX design<" },
                { label: "Video/Animation/Editing" },
                { label: "Game Designer" },
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
