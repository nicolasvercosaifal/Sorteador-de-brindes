import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function LuckyDraw() {
    const navigate = useNavigate();
    const [lista, setLista] = useState();
    const [winner, setWinner] = useState();

    useEffect(() => {
        const d = localStorage.getItem("list");
        const i = JSON.parse(d);
        return () => {
            setLista(i)
        }
    }, [])

    function draw() {
        let list = JSON.parse(localStorage.getItem('list'));
        let numberList = [];
        if (localStorage.getItem('list')) {
            list.map((i) => {
                return numberList.push(i.number)
            })
        }

        console.log(numberList)

        let magicNumber = numberList[Math.floor(Math.random() * numberList.length)]

        lista.forEach((i) => {
            if (i.number === magicNumber) {
                setWinner(i);
            }
        })


    }

    function deleteAll() {
        localStorage.removeItem('list')
        window.location.reload(false);
    }


    return (
        <div className="wrap">
            <div className="space"></div>
            <div className="luckydraw">
                <span className="title">Sorteador de Brinde</span>
                {lista &&
                    <button className="drawButton" onClick={draw}>
                        Sortear
                    </button>
                }
                <ul className="list">

                    {lista && lista.map((i) => {
                        return (
                            <li key={i.email}>
                                <div className="nameAndNumber">
                                    <span className="name">{i.name} </span>
                                    <span className="number"> Número da sorte: <span>{i.number}</span> </span>
                                </div>

                                <div>{i.email}
                                    <span> aniversário: {i.date}
                                    </span> {i.number}
                                </div>
                            </li>)
                    })}

                </ul>
                <div className="button-area">
                    { lista &&
                        <button className="delete" onClick={deleteAll}>Deletar lista</button>
                    }
                    <button className="navigateRegisterButton" onClick={() => navigate("/cadastro")}>Novo participante</button>
                </div>
            </div>
            {winner ? (

                <div className="winner">
                    <h2>Vencedor</h2>
                    <span>Nome: <b>{winner.name}</b></span>
                    <span>email: <b>{winner.email}</b></span>
                    <span>Data de nascimento: <b>{winner.date}</b></span>
                    <span>Número sorteado: <span className="winnerNumber">{winner.number}</span> </span>

                </div>
            ) : (
                <div className="space"></div>
            )}
        </div>
    )
}