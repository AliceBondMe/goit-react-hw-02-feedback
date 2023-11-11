import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prev => {
      return { [e.target.textContent]: prev[e.target.textContent] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, number) => {
      return (total += number);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <Wrapper>
        <GlobalStyle />
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />

        {this.countTotalFeedback() > 0 ? (
          <Section
            title="Statistics"
            children={
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Wrapper>
    );
  }
}
