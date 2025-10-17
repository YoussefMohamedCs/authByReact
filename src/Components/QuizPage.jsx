import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate()

  const questions = [
    {
      id: 1,
      question: "What is React primarily used for?",
      options: ["Database management", "Building user interfaces", "Server-side scripting", "Networking"],
      correct: "Building user interfaces",
    },
    {
      id: 2,
      question: "Which hook is used to manage state in React?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      correct: "useState",
    },
    {
      id: 3,
      question: "What command creates a new React app?",
      options: ["npm create-react-app myApp", "npx create-react-app myApp", "react new myApp", "npm init react-app"],
      correct: "npx create-react-app myApp",
    },
  ];

  const handleChange = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) userScore++;
    });
    setScore(userScore);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">🎓 My Courses</a>
        </div>
      </nav>

      {/* Quiz Content */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">🧠 React Quiz</h2>

        <form onSubmit={handleSubmit}>
          {questions.map((q) => (
            <div key={q.id} className="card mb-4 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{q.question}</h5>
                {q.options.map((option) => (
                  <div className="form-check mt-2" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${q.id}`}
                      id={`${q.id}-${option}`}
                      value={option}
                      onChange={() => handleChange(q.id, option)}
                      checked={answers[q.id] === option}
                    />
                    <label className="form-check-label" htmlFor={`${q.id}-${option}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button type="submit" className="btn btn-success px-4">Submit Quiz</button>
          </div>
        </form>

        {score !== null && (
          <div className="alert alert-info text-center mt-4 d-flex justify-content-center gap-3 align-items-center">
            <p className="m-0 p-0">🎉 You scored <strong>{score}</strong> out of {questions.length}</p>
            <button onClick={()=>navigate("/")} className="btn btn-success px-4">retrun back to Home Page</button>
          </div>
        )}
      </div>
    </div>
  );
}
