import React from 'react';

const QuestionItem = (question) => {
    return (
    <div>
        <span>{question.question}</span>
        {question.answerOptions.map(option => (
            <div key={option.body}>
               <p><input type="radio" value={option.value} />{option.body}</p>
            </div>
        ))}
        <br/>
    </div>
    );
}

export default QuestionItem;
