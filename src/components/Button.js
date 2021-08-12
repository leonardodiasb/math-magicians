import PropTypes from 'prop-types';

const Button = ({ character, classButton, eventFunction }) => <button type="button" className={classButton} onClick={eventFunction}>{character}</button>;

const addToInput = () => {

};

Button.defaultProps = {
  character: '?',
  classButton: 'btn',
  eventFunction: addToInput(),
};

Button.propTypes = {
  character: PropTypes.string,
  classButton: PropTypes.string,
  eventFunction: PropTypes.func,
};

export default Button;
