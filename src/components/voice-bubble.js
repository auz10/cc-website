import React from "react";
import "./voice-bubble.scss";

function VoiceBubble({ voice }) {
  voice.message.json.content.map((block) =>
    block.content.map((text) => <p>{text.value}</p>)
  );
  return (
    <div className="voice">
      <h4>{voice.question.question}</h4>
      {voice.message.json.content.map((block) =>
        block.content.map((text, i) => <p key={i}>{text.value}</p>)
      )}
      <div className="voice__arrow"></div>
      <div className="voice__name">{voice.name}</div>
    </div>
  );
}

export default VoiceBubble;
