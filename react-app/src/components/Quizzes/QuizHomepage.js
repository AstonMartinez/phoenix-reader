import "./Quizzes.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const quizCardStyle = {
  border: "1px solid black",
  width: "400px",
  padding: "5px",
  textAlign: "center",
};

const QuizHomepage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Reading Quizzes</h1>
      <section>
        <div
          style={quizCardStyle}
          onClick={() => {
            history.push("/quizzes/genre");
            return;
          }}
        >
          <div id="quiz-1-header">
            <img
              src="https://i.ibb.co/3h5KtRd/360-F-214459637-Hp7-JSe-Iimh-Am1fz0-Lt-Yy8-Ux-Bq0-N0-Lu-KS.jpg"
              alt="360-F-214459637-Hp7-JSe-Iimh-Am1fz0-Lt-Yy8-Ux-Bq0-N0-Lu-KS"
              border="0"
              style={{ height: "180px", width: "400px" }}
            />
          </div>
          <h3>Which Genre Should You Read Next?</h3>
        </div>
      </section>
    </div>
  );
};

export default QuizHomepage;
