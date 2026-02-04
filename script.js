const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');
const messageText = document.getElementById('message');

const responses = [
    "Haha, nice try!",
    "You can't escape love!",
    "Just say Yes already!",
    "Are you sure?",
    "Think again! 😉"
];

// Function to move the "No" button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Change the funny message
    const randomMsg = responses[Math.floor(Math.random() * responses.length)];
    messageText.innerText = randomMsg;
});

// Function for when "Yes" is clicked
yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});