import { useState } from "react";

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmission(e) {
	e.preventDefault();
	setTitle(title)
  }

  return (
    <div className="app">
      <form className="form">
        <div className="inputs">
          <input className="title" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <textarea className="content" type="text"  placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <div className="actions">
          <button onClick={handleSubmission}>Submit</button>
          <button>Reset</button>
          <button>Reset all</button>
        </div>
      </form>
	  <div className="notes-list">
		<Note title={title} content={content} />
	  </div>
    </div>
  );
}

function Note({title, content}) {
	return (
		<div className="note">
			<span className="note-close">X</span>
			<div>
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default App;
