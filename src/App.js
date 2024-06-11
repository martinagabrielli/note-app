import { useState } from "react";

function App() {
  const initialNotes = [];
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState(initialNotes);
  
  function handleReset(e) {
    e.preventDefault();
    setTitle('');
    setContent('');
  }

  function handleSubmission(e) {
    e.preventDefault();

    if (!title || !content) return;

    const id = crypto.randomUUID();
    const newNote = {
      id,
      title,
      content
    }

    setNotes(notes => [...notes, newNote]);
    handleReset(e);
  }

  function handleResetAll(e) {
    e.preventDefault();
    setNotes([]);
  }

  function handleNoteCloseClick(id) {
    setNotes(notes => notes.filter(note => note.id !== id));
  }

  return (
    <div className="app">
      <form className="form">
        <div className="inputs">
          <input className="title" value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <textarea className="content" value={content} type="text"  placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <div className="actions">
          <button onClick={handleSubmission}>Submit</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleResetAll}>Reset all</button>
        </div>
      </form>
	  <div className="notes-list">
      {notes.map(note => <Note onNoteCloseClick={handleNoteCloseClick}  note={note} key={note.id} />)}
	  </div>
    </div>
  );
}

function Note({note, onNoteCloseClick}) {
	return (
		<div className="note">
			<span className="note-close" onClick={() => onNoteCloseClick(note.id)}>X</span>
			<div>
				<h2>{note.title}</h2>
				<p>{note.content}</p>
			</div>
		</div>
	)
}

export default App;
