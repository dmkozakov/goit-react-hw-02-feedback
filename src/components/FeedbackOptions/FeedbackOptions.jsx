import PropTypes from 'prop-types';
import { FeedbackBox } from './FeedbackOptions.styled';
import { FeedbackOptionBtn } from './FeedbackOptionBtn.styled';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <FeedbackBox>
      <FeedbackOptionBtn
        type="button"
        value="good"
        onClick={e => onLeaveFeedback(e.target.value)}
      >
        Good
      </FeedbackOptionBtn>
      <FeedbackOptionBtn
        type="button"
        value="neutral"
        onClick={e => onLeaveFeedback(e.target.value)}
      >
        Neutral
      </FeedbackOptionBtn>
      <FeedbackOptionBtn
        type="button"
        value="bad"
        onClick={e => onLeaveFeedback(e.target.value)}
      >
        Bad
      </FeedbackOptionBtn>
    </FeedbackBox>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
