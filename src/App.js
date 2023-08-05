import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Data from "./Data";
import { useState } from "react";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("hii")
    setAddItem((preData) => {
      return [...preData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, index) => {
        return index !== id;
      })
    )
  };
  return (
    <>
      <Header />
      <Note passNote={addNote} />
      <div className="dataa">
        {addItem.map((val, index) => {
          return (
            <Data
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
