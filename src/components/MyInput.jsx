
import { MdClose } from "react-icons/md";
export const Input = (props) => {




    return (
        <label>
            {props.title ? <span>{props.title}</span> : <span>label</span>}
            <div className={"wrapLabel"}>
                <input
                    className={props.inputClass}
                    ref={props.myInputRef}
                    onBlur={props.MyOnBlur ? props.MyOnBlur : undefined}
                    //className={props.isValid ? 'inputCheck' : "inputError"}

                    type={props.inputType}
                    onChange={((e) => props.setter(e.target.value))}
                />
                <div className={'hideIcon'} ref={props.myIconRef}>
                    <MdClose color="#FE4A49" size={20} />
                </div>
            </div>
            <span
                className="hideMsgError"
                ref={props.myMsgRef}
            >Input inválido
            </span>
        </label>
    )


}




/* import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const MyInput = (props) => {

    const [valor, setValor] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [msg, setMsg] = useState('');

    const validateEmail = (txt) => {
        const regex = /^[\w.-]+@[\w.-]+\.[\w]{2,}/;
        const result = regex.test(txt);
        console.log(isTyping)
        return result
    }


    const handleValidation = (txt) => {
        if (validateEmail(txt)) {
            setTimeout(setMsg('ok'), 10000)
        } else {
            setMsg('no no no ')
        }
    }

    return (
        <label>
            <span>Label: {msg}</span>
            <input onChange={(e) => { setValor(e.target.value); setIsTyping(true) }} onChangeCapture={(e) => handleValidation(e.target.value)} />
        </label>
    )


}

 */
