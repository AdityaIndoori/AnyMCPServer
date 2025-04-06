function updateSummary() {
    const serverNameElement = document.getElementById('server-name');
    const serverVersionElement = document.getElementById('server-version');
    const summaryDiv = document.getElementById('summary');

    if (!serverNameElement || !serverVersionElement || !summaryDiv) {
        console.error("Required elements for summary not found.");
        return;
    }

    const serverName = serverNameElement.value.trim() || 'N/A';
    const serverVersion = serverVersionElement.value.trim() || 'N/A';
    let toolsSummaryHtml = '<ul>';
    let toolsFound = false;

    document.querySelectorAll('.tool-definition').forEach(toolDiv => {
        toolsFound = true;
        const toolId = toolDiv.id;
        const toolNameInput = document.getElementById(`${toolId}-name`);
        const toolName = toolNameInput ? toolNameInput.value.trim() : 'Unnamed Tool';
        toolsSummaryHtml += `<li><strong>${toolName || 'Unnamed Tool'}</strong>`; // Display 'Unnamed Tool' if empty

        const paramsList = toolDiv.querySelector(`#${toolId}-params-list`);
        if (paramsList && paramsList.children.length > 0) {
            toolsSummaryHtml += ' (Params: ';
            let paramDetails = [];
            paramsList.querySelectorAll('.parameter-definition').forEach(paramDiv => {
                const paramId = paramDiv.id;
                const paramNameInput = document.getElementById(`${paramId}-name`);
                const paramTypeSelect = document.getElementById(`${paramId}-type`);
                const paramRequiredCheckbox = document.getElementById(`${paramId}-required`);

                const paramName = paramNameInput ? paramNameInput.value.trim() : 'unnamed';
                const paramType = paramTypeSelect ? paramTypeSelect.value : 'unknown';
                const paramRequired = paramRequiredCheckbox ? paramRequiredCheckbox.checked : false;

                paramDetails.push(`${paramName || 'unnamed'}: ${paramType}${paramRequired ? '' : ' (optional)'}`);
            });
            toolsSummaryHtml += paramDetails.join(', ');
            toolsSummaryHtml += ')';
        }
        toolsSummaryHtml += '</li>';
    });
    toolsSummaryHtml += '</ul>';

    if (!toolsFound) {
        toolsSummaryHtml = '<p>No tools defined.</p>';
    }

    summaryDiv.innerHTML = `
        <p><strong>Server Name:</strong> ${serverName}</p>
        <p><strong>Server Version:</strong> ${serverVersion}</p>
        <p><strong>Tools:</strong></p>
        ${toolsSummaryHtml}
    `;
}

// Export if using modules (optional)
// export { updateSummary };
