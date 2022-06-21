import React from 'react';
import {useState} from "react";
import styles from "../../pages/Form.module.css";

const EmailInput = ({
                        changeEmail,
                        currentValue,
                    }) => {
    const [inputValue, setInputValue] = useState(currentValue);
    return (
        <div>
            <div className={styles.formTitle}>
                Write your email:
            </div>
            <form>
                <label>
                    <input className={styles.input}
                           type="email"
                           name="email"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}/>
                </label>
            </form>
            <button className={styles.button} onClick={() => {
                changeEmail(inputValue);
            }}>submit
            </button>
        </div>
    )
}

export default EmailInput;