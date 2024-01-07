import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Vite with Tailwind</h1> */}
      <Card username = "Rahul" post = "Software Developer"/>
      <Card username="" post=""/>
      <Card username="" post=""/>
    </>
  );
}

export default App;
