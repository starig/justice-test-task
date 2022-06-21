import React from 'react';
import {useState} from "react";
import styles from "../../pages/Form.module.css";

const SurnameInput = ({
                          changeSurname,
                          currentValue,
                      }) => {
    const [inputValue, setInputValue] = useState(currentValue);
    return (
        <div>
            <div className={styles.formTitle}>
                Write your surname:
            </div>
            <form>
                <label>
                    <input className={styles.input}
                           type="text"
                           name="surname"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}/>
                </label>
            </form>
            <button className={styles.button} onClick={() => {
                changeSurname(inputValue);
            }}>submit
            </button>
        </div>
    )
}

export default SurnameInput;