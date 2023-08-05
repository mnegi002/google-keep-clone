import { useState } from "react";

const Note = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const inputEvent = (event) => {
    // const value=event.target.value;
    // const name=event.target.name;

    const { name, value } = event.target;
    setNote((preData) => {
      return { ...preData, [name]: value };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: ""
    });
  };
  const [expand, setExpand] = useState(false);
  const expandIt = () => {
    setExpand(true);
  };
  return (
    <>
      <div className="content">
        <div className="class">
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              value={note.title}
              name="title"
              onChange={inputEvent}
            />
          ) : null}
          <textarea
            rows="100"
            column="100"
            placeholder="Write a note..."
            value={note.content}
            name="content"
            onClick={expandIt}
            onChange={inputEvent}
          />
          <div className="but">
            {expand ? (
              <button className="plus" onClick={addEvent}>
                <i className="fa-solid fa-plus fa-lg"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
