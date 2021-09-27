import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./event.scss";

function Event({ event }) {
  const [day, month, year] = event.date.split("/");
  event.description.content.map((content) =>
    console.log(content.content[0].value)
  );
  return (
    <div className="event">
      <div className="event__date">
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="event__info">
        <div className="event__info__titleDesc">
          <div className="event__info__name">{event.name}</div>
          <div>
            {event.description.content.map((content, i) => (
              <p key={i}>{content.content[0].value}</p>
            ))}
          </div>
        </div>
        <div className="event__location">
          <FaMapMarkerAlt />
          {event.location}
        </div>
      </div>
    </div>
  );
}

export default Event;
