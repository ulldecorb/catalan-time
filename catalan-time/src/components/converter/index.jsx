import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { dateConverter } from '../../service';
import './converter.css';

export function Converter({ initialDate }) {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(1);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    setHour(initialDate.hour);
    setMinute(initialDate.minute);
  }, [initialDate]);

  useEffect(() => {
    setDate({ minute, hour });
  }, [hour, minute]);

  const hourHandler = (e) => {
    e.preventDefault();
    let newHour = parseInt(e.target.value, 10);

    if (newHour > 12) { newHour = 1; }
    if (newHour < 1) { newHour = 12; }
    setHour(newHour);
  };

  const minuteHandler = (e) => {
    e.preventDefault();
    let newMinute = parseInt(e.target.value, 10);

    if (newMinute > 59) { newMinute = 0; }
    if (newMinute < 0) { newMinute = 59; }
    setMinute(newMinute);
  };

  return (
    <main className="converter">
      <section className="converter__instructions">
        <p className="instructions">
          Select time to get the catalan time formula:
        </p>
      </section>
      <section className="converter__input">
        <input type="number" value={hour} className="input__hour" name="handler-hour" id="handler-hour" max="13" min="0" onChange={(e) => hourHandler(e)} />
        <p>:</p>
        <input type="number" value={minute} className="input__minute" name="handler-minute" id="handler-minute" max="60" min="-1" onChange={(e) => minuteHandler(e)} />
      </section>
      <section className="converter__result">
        <p className="result__text">{dateConverter(date)}</p>
      </section>
    </main>
  );
}

Converter.propTypes = {
  initialDate: PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number
  }).isRequired
};

export default Converter;
