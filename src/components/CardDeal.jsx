import { roadmap } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Roadmap <br className="sm:block hidden" /> 
      </h2>
      

    </div>

    <div className={layout.sectionImg}>
      <img src={roadmap} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
