import PropTypes from 'prop-types';
const Button = ({styles}) => {
  return (
    <button type="button" className={`rounded-sm px-6 py-4 font-medium bg-blue-gradient font-poppins text-[18px] text-primary outline-none ${styles}`} >
      Get Started
    </button>
  )
}
Button.propTypes = {
  styles: PropTypes.string.isRequired,
};


export default Button
