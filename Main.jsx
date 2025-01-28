import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Dice from './Dice';
import classes from './Main.module.css';

const Main = () => {
    const [values1, setValues1] = useState([/* initial values */]);
    const [values2, setValues2] = useState([/* initial values */]);
    const [selected1, setSelected1] = useState([/* initial values */]);
    const [selected2, setSelected2] = useState([/* initial values */]);
    const [count, setCount] = useState(0);
    const [isConfettiVisible, setIsConfettiVisible] = useState(false);

    useEffect(() => {
        const allSelected = selected1.every(val => val) && selected2.every(val => val);
        const allSameValue = new Set([...values1, ...values2]).size === 1;
        if (allSelected && allSameValue) {
            setIsConfettiVisible(true);
        } else {
            setIsConfettiVisible(false);
        }
    }, [values1, values2, selected1, selected2]);

    const handleOnClick = (index) => {
        // handle click logic
    };

    return (
        <main>
            {isConfettiVisible && <Confetti />}
            <h1 className={classes.main_h1}>Tenzi</h1>
            <span style={{ fontWeight: 600 }}> Roll until all the dice are the same in minimal moves</span>
            <span style={{ fontWeight: 800, margin: 10 }}>{count}</span>

            <div className={classes.main_dices}>
                {values1.map((value, index) => (
                    <Dice
                        key={index + 5}
                        value={value}
                        onClick={() => handleOnClick(index)}
                        isSelected={selected1[index]}
                    />
                ))}
            </div>
            <div className={classes.main_dices}>
                {values2.map((value, index) => (
                    <Dice
                        key={index + 5}
                        value={value}
                        onClick={() => handleOnClick(index + 5)}
                        isSelected={selected2[index + 5]}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;