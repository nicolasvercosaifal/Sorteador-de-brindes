import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { Input } from "../../components/MyInput";
import { validateBirthday, validateEmail, validateLuckyNumber, validateName } from "../../utils/validationUtil";
import "./style.css";



export default function Register() {

    let navigate = useNavigate();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [luckyNumber, setLuckyNumber] = useState(NaN);

    let list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem('list')) : [];


    const nameInput = useRef(null);
    const emailInput = useRef(null)
    const dateInput = useRef(null);
    const luckyNumberInput = useRef(null);

    const iconNameRef = useRef('icon');
    const iconEmailRef = useRef('icon');
    const iconDateRef = useRef('icon');
    const iconLuckyNumberRef = useRef('icon');


    const nameError = useRef(null);

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
        iconNameRef.current.classList.toggle("hideIcon", validateName(name));
        iconNameRef.current.classList.toggle("showIcon", !validateName(name));
 
        emailInput.current.classList.toggle("inputValid", validateEmail(email));
        emailInput.current.classList.toggle("inputError", !validateEmail(email));
        iconEmailRef.current.classList.toggle("hideIcon", validateEmail(email));
        iconEmailRef.current.classList.toggle("showIcon", !validateEmail(email));


        dateInput.current.classList.toggle("inputValid", validateBirthday(date));
        dateInput.current.classList.toggle("inputError", !validateBirthday(date));
        iconDateRef.current.classList.toggle("hideIcon", validateBirthday(date));
        iconDateRef.current.classList.toggle("showIcon", !validateBirthday(date));


        luckyNumberInput.current.classList.toggle("inputValid", validateLuckyNumber(luckyNumber));
        luckyNumberInput.current.classList.toggle("inputError", !validateLuckyNumber(luckyNumber));
        iconLuckyNumberRef.current.classList.toggle("hideIcon", validateLuckyNumber(luckyNumber));
        iconLuckyNumberRef.current.classList.toggle("showIcon", !validateLuckyNumber(luckyNumber));


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
                    MyOnBlur={validateName}
                    myInputRef={nameInput}
                    myIconRef={iconNameRef}
                    myMsgError={nameError}
                />
                <Input
                    title="Email"
                    setter={setEmail}
                    MyOnBlur={validateEmail}
                    myInputRef={emailInput}
                    myIconRef={iconEmailRef}
                />
                <Input
                    title="Data de aniversário"
                    inputType="date"
                    setter={setDate}
                    myInputRef={dateInput}
                    myIconRef={iconDateRef}
                    wrapClass="short-input"
                />
                <Input
                    title="Número da sorte"
                    inputType="number"
                    setter={setLuckyNumber}
                    myInputRef={luckyNumberInput}
                    myIconRef={iconLuckyNumberRef}
                    wrapClass="short-input"
                />

            </form>
            <div className="buttonArea">
                <button className="cancel" onClick={cancel}>Cancelar</button>
                <button type="submit" form="my" className="registerButton" onClick={handleSubmit}>Cadastrar</button>
            </div>
        </div>
    )
}
