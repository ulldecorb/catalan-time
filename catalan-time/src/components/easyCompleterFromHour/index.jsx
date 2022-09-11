import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function EasyCompleterFromHour({ topics }) {
  const { statement, hourAnswer, minuteAnswer } = topics;
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [validateAnswer, SetValidateAnswer] = useState(false);
  const checkAnswer = () => {
    if (hour === hourAnswer && minute === minuteAnswer) SetValidateAnswer(true);
    if (hour !== hourAnswer || minute !== minuteAnswer) SetValidateAnswer(false);
  };

  return (
    <article className="easy-completer__quiz">
      <p className="quiz__statement">{statement}</p>
      <div className="quiz__input-box">
        <input className="quiz__hour" type="number" name="hour" id="hour" min="0" max="23" onChange={(e) => setHour(e.target.valueAsNumber)} />
        <p className="quiz__colon">:</p>
        <input className="quiz__minute" type="number" name="minute" id="minute" min="0" max="59" placeholder="0" onChange={(e) => setMinute(e.target.valueAsNumber)} />
      </div>
      <button className="quiz__submit" type="button" onClick={checkAnswer}>Check Answer</button>
      <p className="quiz__solution">
        {validateAnswer ? 'Correcte' : 'Incorrecte, torna a provar-ho!'}
      </p>
    </article>
  );
}

EasyCompleterFromHour.propTypes = {
  topics: PropTypes.shape({
    statement: PropTypes.string.isRequired,
    hourAnswer: PropTypes.number.isRequired,
    minuteAnswer: PropTypes.number.isRequired
  }).isRequired
};

export default EasyCompleterFromHour;
