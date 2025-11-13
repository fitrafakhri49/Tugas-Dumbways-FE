import { useState } from "react";
import "./App.css";
import Counter, { CounterProfile as CounterProfileItem } from "./components/Counter";
import { Button } from "./components/Button";
import { TodoList } from "./components/TodoList";

function App() {
  const [counter, setCounter] = useState(0);
  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);
  const [done3, setDone3] = useState(false);

  return (
    <>
      <CounterProfileItem text={counter} />
      <Button EventOnClick={() => setCounter(counter + 1)} text={"Add"} />

      {counter > 10 ? (
        <Counter text={"sudah lebih dari 10"} />
      ) : (
        <Counter text={"Belum sampai dari 10"} />
      )}

      {done1 ? 
        (<TodoList EventOnClick={() => setDone1(false)}text={"Belajar 1"}isDone={done1}/>) :
        (<TodoList EventOnClick={() => setDone1(true)}text={"Belajar 1"} isDone={done1}/>)}

      {done2 ? (
        <TodoList EventOnClick={() => setDone2(false)}text={"Belajar 2"}isDone={done2}/>) :
         (<TodoList EventOnClick={() => setDone2(true)}text={"Belajar 2"}isDone={done2}/>)}

      {done3 ? (
        <TodoList
          EventOnClick={() => setDone3(false)}
          text={"Belajar 3"}
          isDone={done3}
        />
      ) : (
        <TodoList
          EventOnClick={() => setDone3(true)}
          text={"Belajar 3"}
          isDone={done3}
        />
      )}
    </>
  );
}

export default App;












