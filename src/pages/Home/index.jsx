import { Navigate, useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <span className="title">Sorteio de Brinde</span>
            <button className="homeButton" onClick={() => navigate("/cadastro")}>
                NOVO PARTICIPANTE
            </button>
            <button className="homeButton" onClick={() => navigate("/sorteio")}>
                SORTEAR
            </button>

        </div>
    )
}