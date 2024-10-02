import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import data from "./components/Source";
import WebDetail from "./components/WebDetails";
import WebList from "./components/WebList";
import Container from "./Container";
function App() {
  const [description, setDescription] = useState({
    list: [],
    image: [],
    id: [],
  });

  return (
    <>
      <Header />
      <Container>
        <WebList data={data} setDescription={setDescription} />
        <WebDetail
          lists={description.list}
          image={description.image}
          id={description.id}
        />
      </Container>
    </>
  );
}

export default App;

