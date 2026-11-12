import { useEffect, useState } from "react";

export default function Joker() {
  const URL = "https://icanhazdadjoke.com/slack";
  let [joke, setJoke] = useState({});

  const getNewJoke = async () => {
    let res = await fetch(URL);
    let jsonFormat = await res.json();
    console.log(jsonFormat);
    setJoke({ fallback: jsonFormat.attachments[0].fallback });
  };

  useEffect(() => {
    async function gerFirstJoke() {
      let res = await fetch(URL);
      let jsonFormat = await res.json();
      console.log(jsonFormat);
      setJoke({ fallback: jsonFormat.attachments[0].fallback });
    }
    gerFirstJoke();
  }, []);
  return (
    <div>
      <h4>Joker</h4>
      <h3>Joke time : {joke.fallback}</h3>
      <button onClick={getNewJoke}>Click me!</button>
    </div>
  );
}
