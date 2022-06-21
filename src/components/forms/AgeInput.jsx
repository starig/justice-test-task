import React from 'react';
import {useState} from "react";
import styles from "../../pages/Form.module.css";

const AgeInput = ({
                      changeAge,
                      currentValue,
                  }) => {
    const [inputValue, setInputValue] = useState(currentValue);
    return (
        <div>
            <div className={styles.formTitle}>
                Write your age:
            </div>
            <form>
                <label>
                    <input className={styles.input}
                           type="number"
                           min={1}
                           max={100}
                           name="name"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}/>
                </label>
            </form>
            <button className={styles.button} onClick={() => {
                changeAge(inputValue);
            }}>submit
            </button>
        </div>
    )
}

export default AgeInput;