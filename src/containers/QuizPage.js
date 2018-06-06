import React, { Component } from 'react';
import Question from '../components/Quiz/Question'
import quizQuestions from '../components/Quiz/quizQuestions'
import Quiz from '../components/Quiz/Quiz';
import PropTypes from "prop-types";
import update from 'immutability-helper';

class QuizPage extends Component {
    state = {
        counter: 0,
        history: [
            {
                questionId: "",
                answer: ""
            }
        ],
        img: "",
        questionId: 1,
        question: "",
        answerOptions: [],
        answer: "",
        answersCount: {
            Pro: 0,
            Casual: 0,
            BusinessCasual: 0
        },
        result: "",
        showPath: false,
        response: [],
        suggestion: ''
    }

    componentWillMount() {
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: quizQuestions[0].answers
        });
    }

    setUserAnswer = () => {
        const updatedAnswersCount = update(this.state.answersCount, {
            [this.state.answer]: { $apply: currentValue => currentValue + 1 }
        });
        this.setState({
            answersCount: updatedAnswersCount
        });
    };

    handleBackButton = event => {
        event.preventDefault();
        console.log("prev");
        const history = this.state.history;
        const counter = this.state.counter - 1;
        const questionId = this.state.questionId - 1;
        const current = this.state.history.splice(this.state.counter - 1, 1);

        console.log(current);
        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answersCount: history[counter].answersCount,
            answer: history[counter].answer
        });
    };

    handleNextButton = event => {
        event.preventDefault();
        console.log("next");
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        if (this.state.questionId === quizQuestions.length) {
            setTimeout(() => this.setResults(this.getResults()), 300);
        } else {
            this.setUserAnswer();
            this.setState({
                history: this.state.history.concat([
                    {
                        questionId: this.state.questionId,
                        answer: this.state.answer,
                        answersCount: this.state.answersCount
                    }
                ]),
                counter: counter,
                questionId: questionId,
                question: quizQuestions[counter].question,
                answerOptions: quizQuestions[counter].answers,
                answer: ""
            });
        }
    };

    handleAnswerSelected = event => {
        if (event.target.value !== "Pro" || event.target.value !== "Business Casual" || event.target.value !== "Casual") {
            // this.setState({ result: event.currentTarget.value })
        }
        console.log(event.target.value)
        this.setState({
            answer: event.currentTarget.value
        });
    };


    render() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
                onNextPressed={this.handleNextButton}
                onBackPressed={this.handleBackButton}
            />
        )
    }
}

export default QuizPage