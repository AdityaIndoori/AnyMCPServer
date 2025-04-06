let currentStep = 1;

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');

    // Show the target step
    const stepToShow = document.getElementById(`step-${stepNumber}`);
    if (stepToShow) {
        stepToShow.style.display = 'block';
        currentStep = stepNumber;
        // If moving to step 3, update the summary (assuming updateSummary is globally available or imported)
        if (stepNumber === 3 && typeof updateSummary === 'function') {
            updateSummary();
        }
    } else {
        console.error(`Step ${stepNumber} not found.`);
    }
}

function nextStep(currentStepNumber) {
    // Basic validation before proceeding from step 1
    if (currentStepNumber === 1) {
        const serverNameInput = document.getElementById('server-name');
        if (serverNameInput && !serverNameInput.value.trim()) {
            alert('Please enter a Server Name.');
            return; // Stop navigation if validation fails
        }
    }
    // Add more validation for other steps if needed

    showStep(currentStepNumber + 1);
}

function prevStep(currentStepNumber) {
    showStep(currentStepNumber - 1);
}

// Initial setup to show the first step when the script loads
// This might be better placed in the main script after the DOM is loaded.
// For now, we assume showStep(1) will be called initially elsewhere.

// Export functions if using modules (optional for this simple case)
// export { showStep, nextStep, prevStep, currentStep };
