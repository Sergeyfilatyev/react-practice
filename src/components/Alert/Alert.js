import styles from './Alert.module.css';
import PropTypes from 'prop-types';
console.log(styles);
function Alert({ text, type }) {
  return (
    <p role="alert" className={styles[type]}>
      {text}
    </p>
  );
}
Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};
export default Alert;
