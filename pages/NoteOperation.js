import { useState } from 'react'

import { app, database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';



// This gets called on every request
export async function getServerSideProps(req) {
    // Fetch data from external API
    const dbInstance = collection(database, 'notes');
    addDoc(dbInstance, {
        noteTitle: req
    }).then(res => {
        console.log("res:")
        console.log(res._key.path.lastSegment())
        if(res._key.path.lastSegment() !== ""){
            return {props:
                    {
                        name: req,
                        success: true
                    }
            }
        }

        return {
            props:
        {
            success: false
        }
    }
    })
}

export default function NoteOperations() {
    const [isInputVisible, setInputVisible] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');

    const [isStored, setIsStored] = useState(false);
    const [isLoading, setIsLoading] = useState(false);



    const saveNote = async () => {
        setIsLoading(true)
        setIsStored(false)

        await getServerSideProps(noteTitle).then(res => {
            console.log(res)
            if (res.success) {
                console.log("success!!")
            }

            setIsStored(true)
            setIsLoading(false)
        })
    }

    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }
    return (
        <>
            <div className="flex justify-center my-3">
                <button
                    onClick={inputToggle}
                    className="btn">
                    Add a New Note
                </button>
            </div>

            <div className="flex justify-center my-2">
                {isInputVisible ? (
                        <input type="text" onChange={(e) => setNoteTitle(e.target.value)}
                               placeholder='Enter the Title..'
                               className="input input-bordered input-primary w-full max-w-xs"/>
                ) : (
                    <></>
                )}

            </div>

            <div className="flex justify-center my-2">
                {!isLoading ? (<button
                    onClick={saveNote}
                    className="btn btn-primary">
                    Save Note
                </button>) : (<button className="btn btn-primary loading"></button>
                )}
            </div>



            {isStored && (
                <div className="flex justify-center my-4">
                    <div className="alert alert-success shadow-lg w-auto">
                        <div className="w-full">
                            <span>Stored Successfully!</span>
                        </div>
                    </div>
                </div>
                )}

        </>
    )
}