
import { useState } from 'react'
import NoteOperations from "./NoteOperation";

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>

            <Header title="Develop. Preview. SHIPPP. 🚀" />
            <div className="w-full justify-center my-3 btn btn-primary">HELOO everyone</div>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>

            <div className="card">
                <div className="p-3">
                    <NoteOperations />
                </div>
            </div>
        </div>
    );
}
