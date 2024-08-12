import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Button2 from "./components/button/Button2";
import ListGroup from "./components/ListGroup";
import "./App.css";
import ListGroupCssInJs from "./components/ListGroupCssInJs";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

const App = () => {
  const items = ["Tokyo", "London", "Paris", "San Francisco", "New York"];

  // Event handler
  const handleSelectItem = (item: string) => console.log(item);
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <Like onClick={() => console.log("clicked")} />
      {/* <Button2
        children="My Button"
        color="primary"
        onClick={() => setAlertVisible(true)}
      /> */}
      {/* <BsFillCalendarFill color="red" size="25" /> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <p>Hello World</p>
        </Alert>
      )}
      <Button
        children="My Button"
        color="secondary"
        onClick={() => setAlertVisible(true)}
      /> */}

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <ListGroupCssInJs
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </>
  );
};

export default App;
