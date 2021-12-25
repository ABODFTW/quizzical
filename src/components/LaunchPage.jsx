import React from "react";

export default function LaunchPage(props) {
  return (
    <div>
      <div className="text-centered centered shadow rounded">
        <h1>Quizzical</h1>
        <p>A fun webapp to help you test your 🌏 knowledge!</p>
        <button
          className="btn btn-primary rounded "
          onClick={props.toggleLaunchPage}
        >
          Start quiz!
        </button>
      </div>
    </div>
  );
}
