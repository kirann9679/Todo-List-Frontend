import SearchBar from "./SearchBar";
import List from "./List";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);
  const [todos, SetTodos] = useState([]);
  const searchHandler = (e) => {
    setText(e.target.value);
  };
  const buttonHandler = () => {
    setClick(true);
  };
  const delhandler = (idvalue) => {
    axios
      .delete(`http://localhost:8080/api/v1/deletetodo/${idvalue}`)
      .then((response) => {
        console.log(response.data);
        SetTodos(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!click) {
      axios
        .get("http://localhost:8080/api/v1/getalltodos")
        .then((response) => {
          console.log(response.data);
          SetTodos(response.data);
        })
        .catch((err) => console.log(err));
    } else if (click && text) {
      axios
        .post("http://localhost:8080/api/v1/savetodo", { text: text })
        .then((response) => {
          console.log(response.data);
          SetTodos(response.data);
        })
        .catch((err) => console.log(err));
    }
    return () => {
      setClick(false);
    };
  }, [click, text]);

  return (
    <div>
      {" "}
      <SearchBar
        text={text}
        click={click}
        searchHandler={searchHandler}
        buttonHandler={buttonHandler}
      />
      <List todos={todos} delhandler={delhandler} />
    </div>
  );
}
export default App;
