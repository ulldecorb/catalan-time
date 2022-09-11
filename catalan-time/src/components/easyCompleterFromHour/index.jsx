import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './easyCompleterFromHour.css';

export function EasyCompleterFromHour({ topics }) {
  const { statement, hourAnswer, minuteAnswer } = topics;
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [validateAnswer, SetValidateAnswer] = useState(false);
  const checkAnswer = () => {
    setShowAnswer(true);
    let newHour = hour;
    let newMinute = minute;
    if (typeof (newHour) === 'string') { newHour = 0; }
    if (typeof (newMinute) === 'string') { newMinute = 0; }
    if (hour === hourAnswer && minute === minuteAnswer) SetValidateAnswer(true);
    if (hour !== hourAnswer || minute !== minuteAnswer) SetValidateAnswer(false);
  };

  const getAnswerStyle = () => (validateAnswer
    ? 'quiz__solution--correct'
    : 'quiz__solution--fail');
  return (
    <article className="quiz">
      <p className="quiz__statement">{statement}</p>
      <div className="quiz__input-box">
        <input className="quiz__hour" type="number" name="hour" id="hour" min="0" max="23" placeholder="0" onChange={(e) => setHour(e.target.valueAsNumber)} />
        <p className="quiz__colon">:</p>
        <input className="quiz__minute" type="number" name="minute" id="minute" min="0" max="59" placeholder="0" onChange={(e) => setMinute(e.target.valueAsNumber)} />
      </div>
      <button className="quiz__submit" type="button" onClick={checkAnswer}>Check Answer</button>
      {/* {showAnswer && (
      <p className="quiz__solution">
        {validateAnswer ? 'Correcte' : 'Incorrecte, torna a provar-ho!'}
      </p> */}

      <p className={showAnswer
        ? getAnswerStyle()
        : 'quiz__solution'}
      >
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
