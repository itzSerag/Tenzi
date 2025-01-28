import { useEffect, useState } from 'react';
import Dice from './Dice';
import classes from './Main.module.css';
import { ConfettiAnimation } from './ConfettiAnimation';

export const Main = () => {
    const [values1, setValues1] = useState(() => {
        return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    });

    const [values2, setValues2] = useState(() => {
        return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    });

    const [count, setCount] = useState(0);
    const [selected1, setSelected1] = useState([false, false, false, false, false]);
    const [selected2, setSelected2] = useState([false, false, false, false, false]);
    const [isConfettiVisible, setIsConfettiVisible] = useState(false);

    useEffect(() => {
        const allSelected = selected1.every(val => val) && selected2.every(val => val);
        const allSameValue = new Set([...values1, ...values2]).size === 1;
        if (allSelected && allSameValue) {
            setIsConfettiVisible(true);
        }
    }, [values1, values2, selected1, selected2]);

    const shuffledValues = () => {
        setCount((prevCount) => prevCount + 1);

        setValues1((prevValues) =>
            prevValues.map((value, index) =>
                selected1[index] ? value : Math.floor(Math.random() * 6) + 1
            )
        );

        setValues2((prevValues) =>
            prevValues.map((value, index) =>
                selected2[index] ? value : Math.floor(Math.random() * 6) + 1
            )
        );
    };

    const handleOnClick = (index, isSecondArray) => {
        if (isSecondArray) {
            setSelected2((prevSelection) => {
                const newSelections = [...prevSelection];
                newSelections[index] = !newSelections[index];
                return newSelections;
            });
        } else {
            setSelected1((prevSelection) => {
                const newSelections = [...prevSelection];
                newSelections[index] = !newSelections[index];
                return newSelections;
            });
        }
    };

    return (
        <main>
            {isConfettiVisible && <ConfettiAnimation />}
            <h1 className={classes.main_h1}>Tenzi</h1>
            <span style={{ fontWeight: 600 }}> Roll until all the dice are the same in minimal moves</span>
            <span style={{ fontWeight: 800, margin: 10 }}>{count}</span>

            <div className={classes.main_dices}>
                {values1.map((value, index) => (
                    <Dice
                        key={index}
                        value={value}
                        onClick={() => handleOnClick(index, false)}
                        isSelected={selected1[index]}
                    />
                ))}
            </div>

            <div className={classes.main_dices}>
                {values2.map((value, index) => (
                    <Dice
                        key={index + 5}
                        value={value}
                        onClick={() => handleOnClick(index, true)}
                        isSelected={selected2[index]}
                    />
                ))}
            </div>

            <button className={classes.main_dice_button} onClick={shuffledValues}>Roll Dice</button>
        </main>
    );
};