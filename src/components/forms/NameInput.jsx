import React, {useState} from 'react';
import styles from './../../pages/Form.module.css';

const NameInput = ({
                       changeName,
                       currentValue,
                   }) => {
    const [inputValue, setInputValue] = useState(currentValue);
    return (
        <div>
            <div className={styles.formTitle}>
                Write your name:
            </div>
            <form>
                <label>
                    <input className={styles.input}
                           type="text"
                           name="name"
                           minLength={3}
                           maxLength={100}
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}/>
                </label>
            </form>
            <button className={styles.button} onClick={() => {
                changeName(inputValue);
            }}>submit
            </button>
        </div>
    )
}

export default NameInput;