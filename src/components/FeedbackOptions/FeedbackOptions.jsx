import { nanoid } from 'nanoid';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={nanoid()}>
          <Button type="button" aria-label={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};
