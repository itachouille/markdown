import { marked } from "marked";
import { useState } from "react";
import "./styles.css";

function App() {
  const localNotes = localStorage.getItem("notes");
  const [notes, setNotes] = useState(localNotes);

  const [inputValue, setInputValue] = useState("");
  const markdowTransform = () => {
    return { __html: marked.parse(inputValue) };
  };

  const handleChange = (e) => {
    localStorage.setItem("notes", e.target.value);
    setNotes(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="home">
      <div className="fenetreGauche">
        <textarea
          className="textArea"
          placeholder="Add your markdown here"
          value={notes}
          onChange={handleChange}
        />
      </div>
      <div className="fenetreDroite">
        <div dangerouslySetInnerHTML={markdowTransform()} />
      </div>
    </div>
  );
}

export default App;
