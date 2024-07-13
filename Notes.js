import React, { useEffect, useState } from 'react'

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [notebar, setNotebar] = useState([]);

    const [note, setNotesText] = useState(
        { content: '', title: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, content)
        setNotesText({
            content: content,
            title: title
        })
        setNotes([...notes, note])
        localStorage.setItem('notes', notes)
        const show = localStorage.getItem('notes');
        setNotebar(show)
        console.log(note, notes);
    }
    useEffect(() => {
        console.log(content, title);
    }, [])

    // console.log(content,title);

    return (
        <>
            <nav className="navbar navbar-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    {/* <span className="navbar-text">
                        Navbar text with an inline element
                    </span> */}
                </div>

            </nav>
            <form onSubmit={handleSubmit}>
                <h2 >Add Note</h2>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" type="text" placeholder="Default input"></input>
                <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control my-4" type="text" placeholder="Add Notes"></input>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
            {/* <div className='noteselement mx-2'>
                <div className='buttons9'>
                    <div className="edit">Edit</div>
                    <div className="delete">Delete</div>
                </div>
                <p>time{note.title}</p>
                <p>text{note.content}</p>
            </div> */}
            <div className='d-flex flex-wrap'>

                {notes.map((note, index) => {
                    return (
                        <div className='noteselement mx-2' id={`list${index}`}>
                            <div className='buttons'>
                                <div className="delete my-0">X</div>

                                <div className="edit my-0">Edit</div>
                            </div>
                            <h3>title{note.title}</h3>
                            <h6>content{note.content}</h6>
                        </div>
                    )
                })}
            </div>

            <div id="mode">
                <input id="theme" type='checkbox' />
                <label htmlFor="theme">
                    <span id="light">☀️ Light Mode</span>
                    <span id="dark">🌙 Dark Mode</span>
                </label>
            </div>
        </>
    )


}
