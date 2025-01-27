import classes from './Dice.module.css';

// eslint-disable-next-line react/prop-types
const Dice = ({ value, onClick, isSelected }) => {
    return (
        <div
            className={`${classes.dice} ${isSelected ? classes.selected_dice : ''}`}
            onClick={onClick}
        >
            {value}
        </div>
    );
};

export default Dice;