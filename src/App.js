import { useEffect, useState } from "react";
import Form from "./Components/form/Form";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import "./App.css";

const { Configuration, OpenAIApi } = require("openai");

export default function App() {
  //const [data, setData] = useState({});
  const [scaryTopic, setScaryTopic] = useState("");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  //component did mount - empty array tells it to only render when it first mounts
  useEffect(() => {
    console.log("useEffect ran");
    setLoading(false);
  }, []);

  // component did update
  useEffect(() => {
    console.log("useEffect with prompt");
    setLoading(false);
  }, [prompt]);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const searchForScaryStory = (event) => {
    event.preventDefault();
    openai
      .createCompletion("text-davinci-002", {
        prompt: `Create scary story for a ${scaryTopic} topic.`,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })

      .then((response) => {
        // creates a variable to store response in

        const idea = response.data.choices[0].text;
        // //sets the prompt
        setPrompt(`Possible idea for the topic of ${scaryTopic}.`);
        // //sets the response
        setResponse(idea);
        console.log(idea);
        const responseObject = {
          prompt: `Micro horror story about ${scaryTopic}.`,
          ideas: response.data.choices[0].text,
        };
        if (prompt && idea) {
          setList((list) => [{ prompt, idea }, ...list]);
        }
        setList([responseObject, ...list]);

        setScaryTopic("");
      });
  };
  console.log(list);
  return (
    <div className="app">
      <Header />
      <section className="form">
        <Form
          scaryTopic={scaryTopic}
          setScaryTopic={setScaryTopic}
          searchForScaryStory={searchForScaryStory}
        />
      </section>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div className="hidden">
          <div>{prompt}</div>
          <br />
          <div>{response}</div>
        </div>
      )}

      {list.map((topic, i) => (
        <section>
          <ul key={i}>
            <br />
            <p className="topic">{topic.prompt}</p>
            <p>{topic.ideas}</p>
          </ul>
        </section>
      ))}
      <Footer />
    </div>
  );
}
