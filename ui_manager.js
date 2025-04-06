let toolCounter = 0;
let paramCounter = 0; // Unique counter for parameters across all tools

function addTool() {
    toolCounter++;
    const toolId = `tool-${toolCounter}`;
    const toolsList = document.getElementById('tools-list');
    if (!toolsList) {
        console.error("Element with ID 'tools-list' not found.");
        return;
    }

    const toolDiv = document.createElement('div');
    toolDiv.classList.add('tool-definition');
    toolDiv.id = toolId;
    // Using textContent or safer methods might be better if user input was directly used here,
    // but for static structure innerHTML is concise.
    toolDiv.innerHTML = `
        <h4>Tool ${toolCounter} <button type="button" class="remove-btn" onclick="removeElement('${toolId}')">Remove Tool</button></h4>
        <label for="${toolId}-name">Tool Name:</label>
        <input type="text" id="${toolId}-name" placeholder="e.g., add_numbers" required><br><br>

        <label for="${toolId}-desc">Description:</label>
        <textarea id="${toolId}-desc" rows="2" style="width: calc(100% - 22px); margin-bottom: 10px;"></textarea><br>

        <h5>Parameters:</h5>
        <div id="${toolId}-params-list" class="params-list">
            <!-- Parameters will be added here -->
        </div>
        <button type="button" onclick="addParameter('${toolId}')">Add Parameter</button>
    `;
    toolsList.appendChild(toolDiv);
}

function addParameter(toolId) {
    paramCounter++;
    const paramId = `param-${paramCounter}`;
    const paramsList = document.getElementById(`${toolId}-params-list`);
     if (!paramsList) {
        console.error(`Element with ID '${toolId}-params-list' not found.`);
        return;
    }

    const paramDiv = document.createElement('div');
    paramDiv.classList.add('parameter-definition');
    paramDiv.id = paramId;
    paramDiv.innerHTML = `
        <label for="${paramId}-name">Name:</label>
        <input type="text" id="${paramId}-name" placeholder="e.g., num1" required>

        <label for="${paramId}-type">Type:</label>
        <select id="${paramId}-type">
            <option value="string">string</option>
            <option value="number">number</option>
            <option value="boolean">boolean</option>
        </select>

        <label for="${paramId}-required">Required:</label>
        <input type="checkbox" id="${paramId}-required" checked>

        <button type="button" class="remove-btn" onclick="removeElement('${paramId}')">Remove Param</button>
    `;
    paramsList.appendChild(paramDiv);
}

function removeElement(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
        // Optional: Add logic here if removing a tool needs to decrement toolCounter
        // or handle parameter counters, though it might not be necessary.
    } else {
        console.warn(`Element with ID '${elementId}' not found or has no parent.`);
    }
}

// Export functions if using modules (optional)
// export { addTool, addParameter, removeElement };
