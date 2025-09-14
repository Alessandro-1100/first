const boxes = document.querySelectorAll('.subject-box');
const display = document.getElementById('content-display');

const subjectDetails = {
  "Subject 1": "Details about Subject 1: This could be math, science, or any topic you define.",
  "Subject 2": "Details about Subject 2: Expand with relevant content or links.",
  "Subject 3": "Details about Subject 3: You can include images, videos, or interactive elements.",
  "Subject 4": "Details about Subject 4: Great for summaries or lesson plans.",
  "Subject 5": "Details about Subject 5: Add quizzes, notes, or study guides.",
  "Subject 6": "Details about Subject 6: Useful for project outlines or assignments.",
  "Subject 7": "Details about Subject 7: Include timelines, key facts, or diagrams.",
  "Subject 8": "Details about Subject 8: Perfect for creative writing or art topics.",
  "Subject 9": "Details about Subject 9: Could be geography, history, or philosophy.",
  "Subject 10": "Details about Subject 10: Customize this for your final subject."
};

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const subject = box.getAttribute('data-subject');
    display.innerHTML = `
      <h2>${subject}</h2>
      <p>${subjectDetails[subject]}</p>
    `;
  });
});
