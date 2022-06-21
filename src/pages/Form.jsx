import React, {useState} from 'react';
import styles from "./Product.module.css";
import formStyles from './Form.module.css';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import NameInput from "../components/forms/NameInput";
import SurnameInput from "../components/forms/SurnameInput";
import AgeInput from "../components/forms/AgeInput";
import EmailInput from "../components/forms/EmailInput";

let filledForms = 0;
const Form = () => {
    const forms = ['name', 'surname', 'age', 'email'];
    const [currentForm, setCurrentForm] = useState(forms[0]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(1);
    const [email, setEmail] = useState('');

    const obj = {
        name,
        surname,
        age,
        email
    }

    const handleValue = (e) => {
        const index = forms.indexOf(e.target.value)
        setCurrentForm(forms[index]);
        console.log(name, surname, age, email)
    }

    const nextClick = (currentForm) => {
        if (filledForms === 4) {
            console.log('name: ' + obj.name);
            console.log('surname: ' + obj.surname);
            console.log('age: ' + obj.age);
            console.log('email: ' + obj.email);
            setName('');
            setSurname('');
            setAge(1);
            setEmail('');
            setCurrentForm(forms[0]);
            filledForms = 0;
        } else {
            let currentIndex = forms.indexOf(currentForm);
            currentIndex === 3 ? currentIndex = 0 : currentIndex++;
            setCurrentForm(forms[currentIndex]);
        }
    }

    const backClick = (currentForm) => {
        let currentIndex = forms.indexOf(currentForm);
        currentIndex--
        setCurrentForm(forms[currentIndex]);
    }

    const changeName = (name) => {
        setName(name);
        obj.name = name;
        name !== '' && filledForms++;
        nextClick(currentForm);
    }

    const changeSurname = (surname) => {
        setSurname(surname);
        obj.surname = surname;
        email !== '' && filledForms++;
        nextClick(currentForm);
    }

    const changeAge = (age) => {
        setAge(age);
        obj.age = age;
        age !== 1 && filledForms++;
        nextClick(currentForm);
    }

    const changeEmail = (email) => {
        setEmail(email);
        obj.email = email;
        email !== '' && filledForms++;
        nextClick(currentForm);
    }

    const renderSwitch = () => {
        switch (currentForm) {
            case 'name':
                return <NameInput
                    currentValue={name}
                    currentForm={currentForm}
                    nextClick={nextClick}
                    changeName={(name) => changeName(name)}/>
            case 'surname':
                return <SurnameInput
                    currentValue={surname}
                    currentForm={currentForm}
                    nextClick={nextClick}
                    changeSurname={(surname) => changeSurname(surname)}/>
            case 'age':
                return <AgeInput
                    currentValue={age}
                    currentForm={currentForm}
                    nextClick={nextClick}
                    changeAge={(age) => changeAge(age)}/>
            case 'email':
                return <EmailInput
                    currentValue={email}
                    currentForm={currentForm}
                    nextClick={nextClick}
                    changeEmail={(email) => changeEmail(email)} />
            default:
                return <NameInput
                    currentValue={name}
                    currentForm={currentForm}
                    nextClick={nextClick}
                    changeName={(name) => changeName(name)}/>

        }
    }


    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.contentMainPage}>
                <Header/>
                <div className={formStyles.header}>Write your information:</div>
                <div className={formStyles.handSection}>
                    <select className={formStyles.handler} onChange={handleValue} value={currentForm}>
                        <option value="name">Name</option>
                        <option value="surname">Surname</option>
                        <option value="age">Age</option>
                        <option value="email">Email</option>
                    </select>
                    {
                        renderSwitch()
                    }
                    <div className={formStyles.buttons}>
                        <button disabled={currentForm === 'name'}
                                className={formStyles.button} onClick={() => backClick(currentForm)}>Back</button>
                        <button className={formStyles.button} onClick={() => nextClick(currentForm)}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;