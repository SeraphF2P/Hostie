import { Link } from "react-router-dom";
import "./index.css";
import { variants } from "./lib/cva";

function App() {
  return (
    <main className="   relative ">
    <Link className={variants({variant:"fill"})} to="/contact">contact</Link>
    <Link className={variants({variant:"fill"})} to="/signup">signup</Link>
  
    </main>
  );
}

export default App;
