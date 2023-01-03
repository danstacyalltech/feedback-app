import React from 'react';
// import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);
	// Calculate ratings avg
	// Take two arguments, the accumulator and the current
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
			// The '0' is the default value of the accumulator
			// Take the sum and then divide it by the amount of feedback comments.
		}, 0) / feedback.length;

	// toFixed makes sure that the number only has a maximum of 1 decimal. replace removes any trailing zeros so you dont have 2.0, 3.0 etc.
	average = average.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
}

// We no longer need this because of useContext.
// FeedbackStats.propTypes = {
// 	feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats;
