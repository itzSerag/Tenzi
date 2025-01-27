import { useState } from 'react';
import Dice from './Dice';
import classes from './Main.module.css';

export const Main = () => {

    const [values1, setValues1] = useState(() => {
        // Generate an array of 5 random numbers between 1 and 6
        return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    });


    const [values2, setValues2] = useState(() => {
        // Generate an array of 5 random numbers between 1 and 6
        return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    });

    const [count, setCount] = useState(0)
    const [selected1, setSelected1] = useState([false, false, false, false, false, false])
    const [selected2, setSelected2] = useState([false, false, false, false, false, false])

    const shuffledValues = () => {

        setCount((prevCount) => prevCount + 1)

        setValues1((prevValues) =>
            prevValues.map((value, index) =>
                selected1[index] ? value : Math.floor(Math.random() * 6) + 1
            )
        );
        setValues2((prevValues) =>
            prevValues.map((value, index) =>
                selected2[index + 5] ? value : Math.floor(Math.random() * 6) + 1
            )
        );

    };




    const handleOnClick = (index) => {
        setSelected1((prevSelection) => {
            const newSelections = [...prevSelection]
            newSelections[index] = !newSelections[index]
            return newSelections
        })
        setSelected2((prevSelection) => {
            const newSelections = [...prevSelection]
            newSelections[index] = !newSelections[index]
            return newSelections
        })
    }



    return (
        <main >
            <h1 className={classes.main_h1}>Tenzi</h1>
            <span style={{ fontWeight: 600 }}> Roll until all the dice are the same in minimal moves</span>
            <span style={{ fontWeight: 800, margin: 10 }}>{count}</span>

            <div className={classes.main_dices}>

                {values1.map((value, index) => (
                    <Dice
                        key={index + 5}
                        value={value}
                        // use this way to include prams
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
                        // use this way to include prams
                        onClick={() => handleOnClick(index + 5)}
                        isSelected={selected2[index + 5]}
                    />
                ))}

            </div>


            <button className={classes.main_dice_button} onClick={shuffledValues}>Roll Dice</button>
        </main>
    );
};
