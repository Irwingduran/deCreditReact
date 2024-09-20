import { bill } from "../assets";
import styles, { layout } from "../style";
import {send, shield, star} from "../assets";

export const featuresBilling = [
  {
    id: "feature-1",
    icon: star,
    title: "Account abstraction",
    content:
      "Web2 like experience with the web3 affordances. Smart wallets with no gas fees, no seed phrase, and entirely self-custodial.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Web2, Web3, and IRL attestations",
    content:
      "GMaps, zK DID, On site verification of home and business addresses, Bank account, WhatsApp, and more to come.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Research-backed development",
    content:
      "This primitive is the result of a 12 week RnDAO and Arbitrum DAO research fellowship.",
  },
  
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== featuresBilling.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>

     <div className={layout.sectionImgReverse}>
     
      <img src={bill} alt="billing" className="w-[100%] h-[95%] relative z-[5]" />      
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
      
    </div>
    
    
    <div className={`${layout.sectionImg} flex-col`}>
   
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Features <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Validate the data authenticated by your credit applicants without exposing their information online <br />
      </p> 


    </div>
      
      

    
      {featuresBilling.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    
  </section>
);

export default Billing;
