import {send, shield, star} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Decentralized Automation",
    content:
      "The use of smart contracts allows to manage events based on conditions, such as reaching loan goal to unlock it, attestating credit behavior, invoking conflict resolution providers, and more.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Open source and EVM aligned",
    content:
      "Aligned with the Etheum ecosystem values to be a constructive protocol.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Open Innovation",
    content:
      "Modular building that allow builders to create solutions as a service based on their contexts of knowledge.",
  },
  {
    id: "feature-4",
    icon: send,
    title: "Technically inclusive",
    content:
      "Our solutions are meant to be used by ordinary people while also facilitating their participation within the DAOs and protocols that support us.",
  },
  {
    id: "feature-5",
    icon: send,
    title: "Metacrisis resilient",
    content:
      "Part of our excess income will be distributed to a locked savings account to enable our clients to build up a collateral that lowers their interest rate and increase their credit capacity.",
  },
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
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

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      You do the lending business, <br className="sm:block hidden" /> we handle the IRL risks, and the positive impact
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Creating new forms of verification to onboard the RWA into DeFi and ReFi.
      </p>


    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
