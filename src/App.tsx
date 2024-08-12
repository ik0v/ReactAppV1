import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  const items = ["Tokyo", "London", "Paris", "San Francisco", "New York"];

  // Event handler
  const handleSelectItem = (item: string) => console.log(item);
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <p>Hello World</p>
        </Alert>
      )}
      <Button
        children="My Button"
        color="secondary"
        onClick={() => setAlertVisible(true)}
      />
    </>

    // <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
};

export default App;
