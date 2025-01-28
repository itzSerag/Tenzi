import { useWindowSize } from 'react-use';
import classes from './ConfettiAnimation.module.css'
import Confetti from 'react-confetti';

export const ConfettiAnimation = () => {
    // get the current size
    const { width, height } = useWindowSize(); // Get the window size

    return (
        <Confetti
            className={classes.confetti_animation}
            width={width}
            height={height}
            numberOfPieces={300} // Number of confetti pieces
            recycle={false} // Stop recycling confetti
            gravity={0.3} // Adjust the falling speed
            colors={['#f00', '#0f0', '#00f']} // Custom colors

        />
    );
};
