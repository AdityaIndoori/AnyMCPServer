// Main script to initialize the wizard

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the first step is shown when the page loads.
    // Assumes showStep function is available from navigation.js
    if (typeof showStep === 'function') {
        showStep(1);
    } else {
        console.error("showStep function not found. Make sure navigation.js is loaded correctly.");
    }

    // Add any other global initializations here if needed.
    console.log("MCP Server Generator Wizard Initialized.");
});

// Note: The actual functions like showStep, nextStep, prevStep, addTool,
// addParameter, removeElement, updateSummary, generateFiles are now
// expected to be defined in their respective files (navigation.js,
// ui_manager.js, summary.js, file_generator.js) and loaded globally
// via separate <script> tags in index.html.
