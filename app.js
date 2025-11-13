function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    // ... (your questions here, unchanged)
    {
        sentence: "She ___ to the store every day.",
        choices: ["go", "goes", "going", "gone"],
        answer: "goes"
    },
    {
        sentence: "They have ___ their homework.",
        choices: ["do", "did", "done", "doing"],
        answer: "done"
    },
    {
        sentence: "I am looking forward ___ you.",
        choices: ["see", "seeing", "to see", "to seeing"],
        answer: "to seeing"
    },
    {
        sentence: "He ___ a book when I saw him.",
        choices: ["read", "reads", "was reading", "is reading"],
        answer: "was reading"
    },
    {
        sentence: "We ___ to Paris last summer.",
        choices: ["go", "went", "gone", "going"],
        answer: "went"
    },

    {
        sentence: "If it ___ tomorrow, we will stay home.",
        choices: ["rains", "rain", "rained", "is raining"],
        answer: "rains"
    },
    {
        sentence: "This is the ___ interesting book I have ever read.",
        choices: ["more", "most", "much", "many"],
        answer: "most"
    },
    {
        sentence: "She has lived here ___ 2010.",
        choices: ["for", "since", "from", "at"],
        answer: "since"
    },
    {
        sentence: "I haven't seen him ___ last week.",
        choices: ["since", "for", "from", "at"],
        answer: "since"
    },
    {
        sentence: "___ you ever been to Italy?",
        choices: ["Did", "Were", "Have", "Do"],
        answer: "Have"
    },
    {
        sentence: "Tom is ___ than Jerry.",
        choices: ["tall", "taller", "the tallest", "as tall"],
        answer: "taller"
    },
    {
        sentence: "There isn't ___ milk left in the fridge.",
        choices: ["some", "any", "many", "a"],
        answer: "any"
    },
    {
        sentence: "She is interested ___ learning Spanish.",
        choices: ["to", "with", "in", "on"],
        answer: "in"
    },
    {
        sentence: "My brother ___ TV when I arrived.",
        choices: ["watches", "watched", "was watching", "is watching"],
        answer: "was watching"
    },
    {
        sentence: "Would you like ___ tea?",
        choices: ["some", "any", "a", "the"],
        answer: "some"
    },
    {
        sentence: "I have ___ friends in London.",
        choices: ["few", "a few", "little", "much"],
        answer: "a few"
    },
    {
        sentence: "The train ___ at 7 o'clock every morning.",
        choices: ["leave", "leaves", "left", "is leaving"],
        answer: "leaves"
    },
    {
        sentence: "He always ___ to finish his work on time.",
        choices: ["try", "tried", "tries", "is trying"],
        answer: "tries"
    },
    {
        sentence: "She can't come to the phone because she ___ a shower.",
        choices: ["is having", "has", "have", "had"],
        answer: "is having"
    },
    {
        sentence: "I ___ my keys! I can't find them.",
        choices: ["lose", "lost", "have lost", "am losing"],
        answer: "have lost"
    },
    {
        sentence: "We ___ dinner when the phone rang.",
        choices: ["have", "were having", "had", "are having"],
        answer: "were having"
    },
    {
        sentence: "My sister ___ to music every night.",
        choices: ["listen", "listens", "listened", "is listening"],
        answer: "listens"
    },
    {
        sentence: "She hasn't finished her homework ___.",
        choices: ["already", "yet", "ever", "just"],
        answer: "yet"
    },
    {
        sentence: "I ___ to the cinema last weekend.",
        choices: ["go", "went", "gone", "going"],
        answer: "went"
    },
    {
        sentence: "We ___ in this city for five years.",
        choices: ["live", "lived", "have lived", "are living"],
        answer: "have lived"
    },
    {
        sentence: "He ___ to school by bus every day.",
        choices: ["go", "goes", "gone", "going"],
        answer: "goes"
    },
    {
        sentence: "If I ___ you, I would apologize.",
        choices: ["was", "were", "am", "be"],
        answer: "were"
    },
    {
        sentence: "She ___ already eaten breakfast.",
        choices: ["has", "have", "having", "had"],
        answer: "has"
    },
    {
        sentence: "___ you like some more coffee?",
        choices: ["Are", "Would", "Do", "Will"],
        answer: "Would"
    },
    {
        sentence: "He is ___ engineers I mentioned earlier.",
        choices: ["an", "a", "the", "one of the"],
        answer: "one of the"
    },
    {
        sentence: "We ___ our homework before dinner yesterday.",
        choices: ["finish", "finished", "have finished", "finishing"],
        answer: "finished"
    },
    {
        sentence: "She ___ in London when she was young.",
        choices: ["lived", "live", "was living", "lives"],
        answer: "lived"
    },
    {
        sentence: "I ___ breakfast every morning.",
        choices: ["have", "had", "having", "has"],
        answer: "have"
    },
    {
        sentence: "They ___ football when it started to rain.",
        choices: ["played", "were playing", "play", "are playing"],
        answer: "were playing"
    },
    {
        sentence: "He ___ his homework yet.",
        choices: ["didn't do", "hasn't done", "doesn't do", "isn't doing"],
        answer: "hasn't done"
    },
    {
        sentence: "She ___ to the party if she finishes work.",
        choices: ["will come", "comes", "came", "is coming"],
        answer: "will come"
    }
];

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const quizDiv = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const resultDiv = document.getElementById('result');

// Create progress bar element only once, above the quiz
let progressBar = document.getElementById('progressBar');
if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'progressBar';
    progressBar.style.width = '100%';
    progressBar.style.height = '12px';
    progressBar.style.background = '#ffe5d0';
    progressBar.style.borderRadius = '8px';
    progressBar.style.marginBottom = '18px';
    progressBar.innerHTML = '<div id="progressBarFill" style="height:100%;width:0;background:linear-gradient(90deg, #ffb385, #ff8c42);border-radius:8px;transition:width 0.3s;"></div>';
    document.querySelector('.quiz-container').insertBefore(progressBar, quizDiv);
}

function startQuiz() {
    shuffle(questions);
    selectedQuestions = questions.slice(0, 15); // pick 15 random questions
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    showQuestion();
}

function updateProgressBar() {
    const bar = document.getElementById('progressBarFill');
    const percent = ((currentQuestion) / selectedQuestions.length) * 100;
    bar.style.width = percent + '%';
}

function showQuestion() {
    resultDiv.textContent = '';
    nextBtn.style.display = 'none';
    updateProgressBar();
    const q = selectedQuestions[currentQuestion];
    let html = `<div class="question">${q.sentence}</div><ul class="choices">`;
    q.choices.forEach((choice, idx) => {
        html += `<li>
            <label>
                <input type="radio" name="choice" value="${choice}">
                ${choice}
            </label>
        </li>`;
    });
    html += '</ul>';
    quizDiv.innerHTML = html;

    const radios = document.getElementsByName('choice');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            nextBtn.style.display = 'inline-block';
        });
    });
}

function showResult() {
    // Fill progress bar
    document.getElementById('progressBarFill').style.width = '100%';

    quizDiv.innerHTML = '';
    nextBtn.style.display = 'none';

    let html = `
        <div style="font-size:1.25rem;font-weight:bold;margin-bottom:0.6em;">
            🎉 Quiz finished!
        </div>
        <div style="font-size:1.1rem;font-weight:bold;color:var(--accent-dark, #ff8c42);margin-bottom:2em;">
            Your score: <span style="color:var(--accent-dark,#ff8c42);">${score} / ${selectedQuestions.length}</span>
        </div>
    `;

    // Gather wrong answers
    let wrongs = userAnswers.filter(item => item.selected !== item.correct);

    if (wrongs.length > 0) {
        html += `<div style="margin-bottom:0.8em;font-weight:bold;">Review your mistakes:</div>`;
        html += `<ul style="margin-top:0.2em;padding-left:0;list-style:none;">`;
        wrongs.forEach((item, idx) => {
            html += `<li style="margin-bottom:1.2em;background:#fff1ef;border-radius:12px;padding:1em;">
                        <div style="font-weight:500;">${item.sentence}</div>
                        <div style="margin-top:0.5em;">
                            <span style="color:#e74c3c;">Your answer:</span>
                            <strong>${item.selected || "<i>No answer</i>"}</strong>
                        </div>
                        <div>
                            <span style="color:#4bb543;">Correct answer:</span>
                            <strong>${item.correct}</strong>
                        </div>
                    </li>`;
        });
        html += `</ul>`;
    } else {
        html += `<div style="margin-top:0.8em;color:#4bb543;font-weight:bold;">Amazing! You got everything right!</div>`;
    }

    // Add Restart Button
    html += `
        <div style="margin-top:2.5em; text-align:center;">
            <button id="restartBtn" style="
                padding: 0.8rem 2.1rem;
                border: none;
                border-radius: 999px;
                background: var(--accent-dark, #ff8c42);
                color: #fff;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(255, 140, 66, 0.08);
                transition: background 0.2s;
            ">
                Restart Quiz
            </button>
        </div>
    `;

    resultDiv.innerHTML = html;

    // Attach event listener to Restart button
    document.getElementById('restartBtn').onclick = function() {
        startQuiz();
        resultDiv.innerHTML = '';
    };
}

nextBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="choice"]:checked');
    const userAnswer = selected ? selected.value : null;
    const currentQ = selectedQuestions[currentQuestion];

    // Save the answer for later review
    userAnswers.push({
        sentence: currentQ.sentence,
        selected: userAnswer,
        correct: currentQ.answer
    });

    if (userAnswer === currentQ.answer) {
        score++;
        resultDiv.textContent = "Correct!";
    } else {
        resultDiv.textContent = `Wrong! The correct answer was: ${currentQ.answer}`;
    }
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < selectedQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
});

// Start the quiz for the first time
startQuiz();
