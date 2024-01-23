import { useState } from "react";
import { toast } from "react-toastify";

const outerStyle = {
  display: "flex",
  flexDirection: "column",
};

const sectionStyle = {
  display: "flex",
};

const GenreQuiz = () => {
  const [responses, setResponses] = useState({
    "question-one": "",
    "question-two": "",
    "question-three": "",
    "question-four": "",
    "question-five": "",
    "question-six": "",
    "question-seven": "",
    "question-eight": "",
    "question-nine": "",
    "question-ten": "",
  });

  const [result, setResult] = useState(null);

  const handleResponseChange = (e) => {
    setResponses((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function suggestBookGenre(answers) {
    // Create a score for each genre based on user's answers
    const scores = {
      "Action/Adventure": 0,
      "Historical Fiction": 0,
      Contemporary: 0,
      "Mystery/Thriller": 0,
      "Fantasy/Sci-Fi": 0,
      Romance: 0,
    };

    // Update scores based on user's answers
    answers.forEach((answer, index) => {
      switch (index) {
        case 0:
          scores["Action/Adventure"] +=
            answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 1:
          scores["Historical Fiction"] +=
            answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 2:
          scores["Contemporary"] += answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 3:
          scores["Mystery/Thriller"] +=
            answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 4:
          scores["Fantasy/Sci-Fi"] +=
            answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 5:
          scores["Romance"] += answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 6:
          scores["Romance"] += answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 7:
          scores["Fantasy/Sci-Fi"] +=
            answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 8:
          scores["Action/Adventure"] +=
            answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 9:
          scores["Mystery/Thriller"] +=
            answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        case 10:
          scores["Contemporary"] += answer === "a" ? 2 : answer === "b" ? 1 : 0;
          break;
        default:
          break;
      }
    });

    // Find the genre with the highest score
    let maxScore = 0;
    let suggestedGenre = "";

    for (const genre in scores) {
      if (scores[genre] > maxScore) {
        maxScore = scores[genre];
        suggestedGenre = genre;
      }
    }

    return suggestedGenre;
  }

  const handleSubmit = () => {
    const userAnswers = Object.values(responses);
    console.log(userAnswers);
    if (userAnswers.includes("")) {
      toast.error("Please ensure you answered all questions.", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else {
      toast.loading("Processing Results", {
        id: "loadingToast",
        position: "top-center",
      });

      const userResult = suggestBookGenre(userAnswers);
      setResult(userResult);
      console.log(userResult);

      toast.dismiss("loadingToast");
    }
  };

  return (
    <div>
      <section>
        <label htmlFor="question-one">
          <strong>What pace do you prefer in a book?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-one"
            type="radio"
            value="a"
          />
          Fast-paced action and suspense
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-one"
            type="radio"
            value="b"
          />
          Moderate pace with a mix of action and character development
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-one"
            type="radio"
            value="c"
          />
          Slow and contemplative storytelling
        </div>
      </section>
      <section>
        <label htmlFor="question-two">
          <strong>Which setting do you find most intriguing?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-two"
            type="radio"
            value="a"
          />
          Futuristic worlds and advanced technology
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-two"
            type="radio"
            value="b"
          />
          Historical settings with rich cultural detail
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-two"
            type="radio"
            value="c"
          />
          Cozy small towns or rural landscapes
        </div>
      </section>
      <section>
        <label htmlFor="question-three">
          <strong>What type of protagonist do you prefer?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-three"
            type="radio"
            value="a"
          />
          Brave and adventurous hero/heroine
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-three"
            type="radio"
            value="b"
          />
          Complex and morally ambiguous characters
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-three"
            type="radio"
            value="c"
          />
          Relatable and everyday individuals
        </div>
      </section>
      <section>
        <label htmlFor="question-four">
          <strong>What is your preferred narrative style?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-four"
            type="radio"
            value="a"
          />
          First-person perspective for an intimate experience
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-four"
            type="radio"
            value="b"
          />
          Third-person omniscient for a broader view of the story
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-four"
            type="radio"
            value="c"
          />
          Multiple perspectives to explore different characters
        </div>
      </section>
      <section>
        <label htmlFor="question-five">
          <strong>Which plot element captivates you the most?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-five"
            type="radio"
            value="a"
          />
          Mystery and solving puzzles
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-five"
            type="radio"
            value="b"
          />
          Political intrigue and power struggles
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-five"
            type="radio"
            value="c"
          />
          Personal growth and overcoming challenges
        </div>
      </section>
      <section>
        <label htmlFor="question-six">
          <strong>What role should romance play in the story?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-six"
            type="radio"
            value="a"
          />
          Central to the plot
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-six"
            type="radio"
            value="b"
          />
          Subtle and woven into the narrative
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-six"
            type="radio"
            value="c"
          />
          Minimal or no romance
        </div>
      </section>
      <section>
        <label htmlFor="question-seven">
          <strong>
            How do you feel about supernatural elements in a story?
          </strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-seven"
            type="radio"
            value="a"
          />
          Love it! Bring on the magic and fantasy
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-seven"
            type="radio"
            value="b"
          />
          Open to it if it enhances the plot
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-seven"
            type="radio"
            value="c"
          />
          Prefer realistic, down-to-earth stories
        </div>
      </section>
      <section>
        <label htmlFor="question-eight">
          <strong>What mood are you in the mood for?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-eight"
            type="radio"
            value="a"
          />
          Excitement and adrenaline
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-eight"
            type="radio"
            value="b"
          />
          Thoughtfulness and reflection
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-eight"
            type="radio"
            value="c"
          />
          Comfort and warmth
        </div>
      </section>
      <section>
        <label htmlFor="question-nine">
          <strong>How long are you willing to invest in a book?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-nine"
            type="radio"
            value="a"
          />
          Short and sweet (under 300 pages)
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-nine"
            type="radio"
            value="b"
          />
          Average length (300-500 pages)
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-nine"
            type="radio"
            value="c"
          />
          Epic and immersive (500+ pages)
        </div>
      </section>
      <section>
        <label htmlFor="question-ten">
          <strong>What kind of ending satisfies you the most?</strong>
        </label>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-ten"
            type="radio"
            value="a"
          />
          Twisty and unexpected
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-ten"
            type="radio"
            value="b"
          />
          Satisfying resolution
        </div>
        <div>
          <input
            onChange={(e) => handleResponseChange(e)}
            name="question-ten"
            type="radio"
            value="c"
          />
          Neat and tidy conclusion
        </div>
      </section>
      <section>
        <button onClick={handleSubmit}>Submit</button>
      </section>
    </div>
  );
};

export default GenreQuiz;
