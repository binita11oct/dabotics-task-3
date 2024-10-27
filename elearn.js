const colors = ["#f9c2ff", "#c2e0f9", "#ffecb3", "#b3ffb3", "#ffb3b3"];
let currentIndex = 0;

document.body.style.backgroundColor = colors[currentIndex];

setInterval(() => {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
}, 5000);

document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;

    const messageDiv = document.getElementById('message') || document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.style.display = 'block';
    messageDiv.textContent = `Thank you for signing up, ${name}! A confirmation email has been sent to ${email}.`;
    messageDiv.style.color = 'green';

    if (!document.getElementById('message')) {
        document.getElementById('signup').appendChild(messageDiv);
    }
});


document.getElementById('uploadForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = event.target[0];
    const fileName = fileInput.files[0]?.name;

    const uploadMessageDiv = document.getElementById('uploadMessage') || document.createElement('div');
    uploadMessageDiv.id = 'uploadMessage';
    uploadMessageDiv.style.display = 'block';
    uploadMessageDiv.textContent = `Successfully uploaded: ${fileName}`;
    uploadMessageDiv.style.color = 'green';

    if (!document.getElementById('uploadMessage')) {
        document.getElementById('upload').appendChild(uploadMessageDiv);
    }

    fileInput.value = '';
});


document.getElementById('assessmentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const answer = event.target[0].value;

    const assessmentMessageDiv = document.getElementById('assessmentMessage') || document.createElement('div');
    assessmentMessageDiv.id = 'assessmentMessage';
    assessmentMessageDiv.style.display = 'block';
    assessmentMessageDiv.textContent = `You submitted: ${answer}. Thank you for your answer!`;
    assessmentMessageDiv.style.color = 'green';

    if (!document.getElementById('assessmentMessage')) {
        document.getElementById('assessment').appendChild(assessmentMessageDiv);
    }

    event.target[0].value = '';
});


document.getElementById('communicationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = event.target[0].value; 

    const communicationMessageDiv = document.getElementById('communicationMessage') || document.createElement('div');
    communicationMessageDiv.id = 'communicationMessage';
    communicationMessageDiv.style.display = 'block';
    communicationMessageDiv.textContent = `Message sent: "${message}"`;
    communicationMessageDiv.style.color = 'green';

    if (!document.getElementById('communicationMessage')) {
        document.getElementById('communication').appendChild(communicationMessageDiv);
    }

    event.target[0].value = '';
});

document.getElementById('userManagementForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const email = event.target[1].value;

    const userMessageDiv = document.getElementById('userMessage') || document.createElement('div');
    userMessageDiv.id = 'userMessage';
    userMessageDiv.style.display = 'block';
    userMessageDiv.textContent = `User added: ${username} (${email})`;
    userMessageDiv.style.color = 'green';

    if (!document.getElementById('userMessage')) {
        document.getElementById('admin').appendChild(userMessageDiv);
    }

    event.target[0].value = '';
    event.target[1].value = '';
});

document.getElementById('contentManagementForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = event.target[0].value;
    const description = event.target[1].value;

    const contentMessageDiv = document.getElementById('contentMessage') || document.createElement('div');
    contentMessageDiv.id = 'contentMessage';
    contentMessageDiv.style.display = 'block';
    contentMessageDiv.textContent = `Content added: "${title}"`;
    contentMessageDiv.style.color = 'green';

    if (!document.getElementById('contentMessage')) {
        document.getElementById('admin').appendChild(contentMessageDiv);
    }

    event.target[0].value = '';
    event.target[1].value = '';
});
