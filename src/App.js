import React, { useState, useEffect } from "react";
import Quote from "./componentes/Quote";
import Spinner from "./componentes/Spinner";

const initialQuote = {
  text: "Quote",
  author: "Author :)"
};

function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  const updateQuote = async () => {
    setLoading(true);
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();

    const { quote: text, author } = newQuote;

    setQuote({
      text,
      author
    });

    setLoading(false);
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      <h1>Breaking Bad Quotes</h1>
      <img
        src="https://areajugones.sport.es/wp-content/uploads/2021/03/bryan-cranston-breaking-bad.jpg"
        alt="logo"
      />
      <div className="contenedor-botones">
        <button id="new-quote" onClick={() => updateQuote()}>
          Get Another
        </button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      {loading ? <Spinner /> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
