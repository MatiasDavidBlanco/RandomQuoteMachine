import React from "react";

const Quote = ({ quote }) => {
  return (
    <div id="quote-box">
      <p id="text">
        {quote.text} <br />
        <span id="author">- {quote.author}</span>
      </p>
    </div>
  );
};

export default Quote;
