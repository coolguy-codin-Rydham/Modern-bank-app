import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";


const Billing = () => {
  return (
    <section className={layout.sectionReverse} id="product">
      <div className={layout.sectionImgReverse}>
        <div className="absolute top-0 w-1/2 rounded-full z-3 -left-1/2 h-1/2 white__gradient"/>
        <div className="absolute bottom-0 z-0 w-1/2 rounded-full -left-1/2 h-1/2 pink__gradient"/>
        <img src={bill} alt="billing" 
        className="w-full h-full relative z-[5] "
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily Control Your <br className="hidden sm:block"/> Billing and invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img src={apple} alt="Apple Store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="Google Play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
      </div>
    </section>
  )
}

export default Billing
