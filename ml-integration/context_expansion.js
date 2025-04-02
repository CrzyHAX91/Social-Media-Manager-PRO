// Context Expansion Implementation
class ContextExpansion {
    constructor() {
        this.contextData = [];
    }

    // Method to add data to the context
    addData(data) {
        this.contextData.push(data);
        if (this.contextData.length > 1000) { // Example limit
            this.contextData.shift(); // Remove oldest data
        }
    }

    // Method to get the current context
    getCurrentContext() {
        return this.contextData;
    }
}

// Example usage
const contextExpander = new ContextExpansion();
contextExpander.addData('New data point');
console.log(contextExpander.getCurrentContext());
