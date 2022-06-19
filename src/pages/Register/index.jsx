import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { Input } from "../../components/MyInput";
import { validateBirthday, validateEmail, validateLuckyNumber, validateName } from "../../utils/validationUtil";
import "./style.css";



export default function Register() {

    let navigate = useNavigate();

    const [participant, setParticipant] = useState()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [luckyNumber, setLuckyNumber] = useState(NaN);

    let list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem('list')) : [];

    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isDateValid, setIsDateValid] = useState(false);
    const [isLuckyNumberValid, setIsLuckyNumberValid] = useState(false);


    const nameInput = useRef(null);
    const emailInput = useRef(null)
    const dateInput = useRef(null);
    const luckyNumberInput = useRef(null);

    const iconNameRef = useRef('icon');
    const iconEmailRef = useRef('icon');
    const iconDateRef = useRef('icon');
    const iconLuckyNumberRef = useRef('icon');

    function handleSave() {
        const data = {
            "name": name,
            "email": email,
            "date": date,
            "number": luckyNumber,
        }
        list.push(data);
        localStorage.setItem("list", JSON.stringify(list))


        navigate("/");

    }



    const handleSubmit = (e) => {
        e.preventDefault()


        nameInput.current.classList.toggle("inputValid", validateName(name));
        nameInput.current.classList.toggle("inputError", !validateName(name))

        emailInput.current.classList.toggle("inputValid", validateEmail(email));
        emailInput.current.classList.toggle("inputError", !validateEmail(email));


        dateInput.current.classList.toggle("inputValid", validateBirthday(date));
        dateInput.current.classList.toggle("inputError", !validateBirthday(date));


        luckyNumberInput.current.classList.toggle("inputValid", validateLuckyNumber(luckyNumber));
        luckyNumberInput.current.classList.toggle("inputError", !validateLuckyNumber(luckyNumber));

        if (validateName(name) && validateEmail(email) && validateBirthday(date) && validateLuckyNumber(luckyNumber)) {
            handleSave()
        }

    }

    function cancel(e) {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className="container">

            <span className="title">Cadastrar novo participante</span>
            <form id="my">
                <Input
                    title="Nome"
                    setter={setName}
                    isValid={isNameValid}
                    MyOnBlur={validateName}
                    myInputRef={nameInput}
                    myIconRef={iconNameRef}

                />
                <Input
                    title="Email"
                    setter={setEmail}
                    isValid={isEmailValid}
                    MyOnBlur={validateEmail}
                    myInputRef={emailInput}
                    myIconRef={iconEmailRef}
                />
                <Input
                    title="Data de aniversário"
                    inputType="date"
                    setter={setDate}
                    isValid={isDateValid}

                    myInputRef={dateInput}
                    myIconRef={iconDateRef}
                    wrapClass="short-input"
                />
                <Input
                    title="Número da sorte"
                    inputType="number"
                    setter={setLuckyNumber}
                    isValid={isLuckyNumberValid}
                    //MyOnBlur={validateLuckyNumber}
                    myInputRef={luckyNumberInput}
                    myIconRef={iconLuckyNumberRef}
                    wrapClass="short-input"
                />

            </form>
            <div className="buttonArea">
                <button type="submit" form="my" className="cancel" onClick={cancel}>Cancelar</button>
                <button className="registerButton" onClick={handleSubmit}>Cadastrar</button>
            </div>
        </div>
    )
}
