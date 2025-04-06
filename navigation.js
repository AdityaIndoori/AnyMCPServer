let currentStep = 1;
const steps = document.querySelectorAll('.step'); // Cache the steps

function showStep(stepNumber) {
    // Hide all steps by adding the hidden class
    steps.forEach(step => {
        if (!step.classList.contains('step-hidden')) {
            step.classList.add('step-hidden');
        }
    });

    // Show the target step by removing the hidden class
    const stepToShow = document.getElementById(`step-${stepNumber}`);
    if (stepToShow) {
        stepToShow.classList.remove('step-hidden');
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
