import PropTypes from 'prop-types';

const Button = ({ character, classButton }) => <button type="button" className={classButton}>{character}</button>;

Button.defaultProps = {
  character: '?',
  classButton: 'btn',
};

Button.propTypes = {
  character: PropTypes.string,
  classButton: PropTypes.string,
};

export default Button;
