import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const feedback = [
  {
    id: "feedback-1",
    content:
      "DeFi needs a trusted party that vouches for IRL business, someone on the ground that can enforce responsibility.",
    name: "Humberto Besso",
    title: "Entrepreneur",
    img: "https://pbs.twimg.com/profile_images/1714750354070601728/JObhehKa_400x400.jpg",
  },
  {
    id: "feedback-2",
    content: 
      "This the emergence of a web of trust for lending.",
    name: "Anna Kaic",
    title: "Entrepreneur",
    img: "https://pbs.twimg.com/profile_images/1737892879182237697/REUpKqkO_400x400.jpg",
  },
  {
    id: "feedback-3",
    content:
      "deCreditScore shows a clear path to build out a crypto-credit score for future and more trusted lending.",
    name: "Sofiverse.eth",
    title: "Entrepreneur",
    img: "https://pbs.twimg.com/profile_images/1744934576399450112/9ThejzO3_400x400.jpg",
  },
];

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        The impact we want <br className="sm:block hidden" /> to have on people
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Creating new forms of verification for all those who require web3 credits.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
