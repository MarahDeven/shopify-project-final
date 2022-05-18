import React from "react";
import "./Form.css";

export default function Form({
  scaryTopic,
  setScaryTopic,
  searchForScaryStory,
}) {
  return (
    <>
      <form className="form" onSubmit={searchForScaryStory}>
        <div className="form-group">
          <label>What do you want your scary story to be about?</label>
          <input
            type="text"
            name="scaryTopic"
            placeholder="example: cats, ocean, etc."
            className="input"
            id="scaryTopic"
            value={scaryTopic}
            onChange={(e) => setScaryTopic(e.target.value)}
          />
        </div>
        <button type="submit" aria-label="submit">
          Submit
        </button>
      </form>
    </>
  );
}
