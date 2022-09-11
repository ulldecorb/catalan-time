import React from 'react';
// import PropTypes from 'react-router-dom';
import { EasyCompleterFromHour } from '../easyCompleterFromHour';
import answers from '../../constants';

export function Practice() {
  const { easyFromString } = answers;
  return (
    <section className="practice">
      <h2 className="practice__title">Practice</h2>
      {easyFromString.map((quiz) => (<EasyCompleterFromHour topics={quiz} key={quiz.statement} />))}
    </section>
  );
}

// Practice.propTypes = {
//   answers: PropTypes.shape({
//     easyFromString: PropTypes.arrayOf(
//       PropTypes.shape({}).isRequired
//     )
//   }).isRequired
// };

export default Practice;
