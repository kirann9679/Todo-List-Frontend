import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function SearchBar({ text, searchHandler, buttonHandler }) {
  return (
    <>
      {/* <input
        type="text"
        value={text}
        placeholder="Add a new Todo.."
        onChange={searchHandler}
      ></input> */}
      <Form.Control
        type="text"
        placeholder="Add a new Todo..."
        value={text}
        onChange={searchHandler}
      />
      {"  "}
      {/* <button onClick={buttonHandler}>Add</button> */}
      <Button variant="primary" size="lg" onClick={buttonHandler}>
        Add
      </Button>
    </>
  );
}
