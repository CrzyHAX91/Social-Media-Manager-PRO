const SocialMediaAgent = require('./ml-integration/social_media_agent');
const smAgent = new SocialMediaAgent();

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the input fields
    const postType = document.getElementById('post-type').value;
    const postContent = document.getElementById('post-content').value;
    const targetAudience = document.getElementById('target-audience').value;

    // Use the SocialMediaAgent to post content
    const result = smAgent.postContent(postType, postContent, targetAudience); // Update this method to accept new parameters

    // Display the result in the result div
    document.getElementById('result').innerText = `Result: ${result}`;
});
