import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris"
    ],
    correct: 0
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix"
    ],
    correct: 0
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing"
    ],
    correct: 0
  }
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // KODUNUZ BURAYA GELECEK
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleAnswer = (index) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore(newAnswers);
    }
  };

  const calculateScore = (answers) => {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct);
  
    const score = (correctAnswers.length / questions.length) * 100;
    setScore(score);
  };

  if (score !== null) {
    return <div>Skorunuz: {score}%</div>;
  }
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} onClick={() => handleAnswer(index)}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
