import ListGroup from "./components/ListGroup";
import ListGroupStyle from "./components/ListGroupStyle/ListGroupStyle";

function App() {
  const heading = ["Cities", "Airports"];
  const cities = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"];
  const airprots = ["Ataturk", "Sabiha Gokcen", "Esenboga", "Bursa", "Antalya"];

  const handelSelectedIndex = (index: number, name: string) => {
    console.log(index, name);
  };
  return (
    <div className="App">
      <ListGroupStyle
        items={cities}
        heading={heading[0]}
        onSelectedItem={handelSelectedIndex}
      />
      <ListGroup
        items={airprots}
        heading={heading[1]}
        onSelectedItem={handelSelectedIndex}
      />
    </div>
  );
}

export default App;
