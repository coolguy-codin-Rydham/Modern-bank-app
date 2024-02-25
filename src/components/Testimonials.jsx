import { feedback } from "../constants";
import styles from "../style";
import CardFeedback from "./CardFeedback";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* Todo */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="flex flex-col justify-between w-full md:flex-row sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="hidden sm:block" /> saying about us
        </h1>
        <div className="w-full mt-6 md:mt-0 ">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full sm:justify-start feedback-container relative z-[1]">
        {
          feedback.map((card)=>{
            return <CardFeedback key={card.id} {...card}/>
          })
        }
      </div>
    </section>
  );
};

export default Testimonials;
