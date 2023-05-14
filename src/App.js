import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios"; // npm install app
function App() {
  const [val, setVal] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("Loading....");
  const [email, setEmail] = useState("Loading...");
  const [gender, setGender] = useState("Loading...");

  useEffect(() => {
    axios.get("http://randonuser.me/api").then((res) => {
      console.log(res.data.result[0]);
      setName(res.data.result[0].name.first);
      setEmail(res.data.result[0].email);
      setGender(res.data.result[0].gender);
    });
  }, []);

  return (
    <div className="App">
      Count:{val}
      <br></br>
      <button
        onclick={() => {
          setVal(val + 1);
        }}
      >
        +
      </button>
      <br></br>
      Price:{price}
      <button
        onclick={() => {
          setPrice(price + 1);
        }}
      >
        +
      </button>
      <br></br>
      Name:{name}
      <br></br>
      Email:{email}
      <br></br>
      Gender:{gender}
      <br></br>
    </div>
  );
}

export default App;
