// #1

 function handleButtonClick(buttonId, message) {
    const button = document.getElementById(buttonId);

    if (button) {
        button.addEventListener('click', function() {
            console.log(message);
        });
    } else {
        console.error(`Button with ID '${buttonId}' not found.`);
    }
}


// #2

function trackMousePosition() {
    function mouseMoveHandler(event) {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
}


// #3

function setupEventDelegation(selector) {
    const listElement = document.querySelector(selector);

    if (!listElement) {
        console.error(`Element not found for selector: ${selector}`);
        return;
    }

    listElement.addEventListener('click', function(event) {
        if (event.target && event.target.tagName === 'LI') {
            const itemText = event.target.textContent.trim();
            console.log(`Item clicked: ${itemText}`);
        }
    });
}


export { handleButtonClick, trackMousePosition, setupEventDelegation }