import React, { useState } from 'react';
import PropTypes from 'react-router-dom';

export function EasyCompleterFromHour({ topics }) {
  const { statement, hourAnswer, minuteAnswer } = topics;
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [validateAnswer, SetValidateAnswer] = useState(false);
  const checkAnswer = () => {
    if (hour === hourAnswer && minute === minuteAnswer) SetValidateAnswer(true);
  };
  return (
    <article className="easy-completer__quiz">
      <p className="quiz__statement">{statement}</p>
      <div className="quiz__input-box">
        <input className="quiz__hour" type="range" name="hour" id="hour" min="0" max="23" onChange={(e) => setHour(e.target.valueAsNumber)} />
        <p className="quiz__colon">:</p>
        <input className="quiz__minute" type="number" name="minute" id="minute" min="0" max="59" onChange={(e) => setMinute(e.target.valueAsNumber)} />
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
    hourAnswer: PropTypes.string.isRequired,
    minuteAnswer: PropTypes.string.isRequired
  }).isRequired
};

export default EasyCompleterFromHour;

/*
const answers = {
    easyFromString: [
        {
            topics: {
                statement: 'Dos quarts de set',
                hourAnswer: 6,
                minuteAnswer: 30
            }
        }
    ]
*/
