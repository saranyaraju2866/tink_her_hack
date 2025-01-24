document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next-button');
    const finishButton = document.getElementById('finish-button');
    const basicInfoSection = document.getElementById('basic-info-section');
    const professionalDetailsSection = document.getElementById('professional-details-section');
    const basicInfoForm = document.getElementById('basic-info-form');
    const professionalDetailsForm = document.getElementById('professional-details-form');

    // Event listener for the "Next" button (moving to Professional Details)
    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (basicInfoForm.checkValidity()) {
            basicInfoSection.style.display = 'none';
            professionalDetailsSection.style.display = 'block';
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Event listener for the "Finish" button (submitting the form)
    finishButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (professionalDetailsForm.checkValidity()) {
            // Normally, here you'd send the data to your server
            const formData = new FormData();
            
            // Collect basic info form data
            formData.append('username', document.getElementById('username').value);
            formData.append('email', document.getElementById('email').value);
            formData.append('password', document.getElementById('password').value);
            formData.append('profile_picture', document.getElementById('profile-picture').files[0]);

            // Collect professional details form data
            formData.append('business_name', document.getElementById('business-name').value);
            formData.append('industry', document.getElementById('industry').value);
            formData.append('linkedin', document.getElementById('linkedin').value);

            // Example: Log form data to the console (you can send it to your server)
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            // Simulate form submission
            alert('Your registration is complete!');
            // Redirect to another page after form submission (optional)
            window.location.href = '/welcome'; // Replace with your desired redirection URL
        } else {
            alert('Please fill in all required fields in the Professional Details section.');
        }
    });

    // Update file name on file input change
    function updateFileName(event) {
        const fileNameSpan = event.target.nextElementSibling;
        fileNameSpan.textContent = event.target.files.length > 0 ? event.target.files[0].name : 'No file chosen';
    }

    // Attach the updateFileName function to the file input
    document.getElementById('profile-picture').addEventListener('change', updateFileName);
});
