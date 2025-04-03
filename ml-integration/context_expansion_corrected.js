class ContextExpansion {
    constructor() {
        this.contextData = [];
        this.maxContextSize = 1000; // Example limit for context size
    }

    // Method to add data to the context
    addData(data) {
        this.contextData.push(data);
        if (this.contextData.length > this.maxContextSize) { // Check against the limit
            this.contextData.shift(); // Remove oldest data
        }
    }

    // Method to get the current context
    getCurrentContext() {
        return this.contextData;
    }

    // Method to clear the context
    clearContext() {
        this.contextData = [];
    }

    // Method to dynamically adjust the context size
    setContextSize(newSize) {
        this.maxContextSize = newSize;
        while (this.contextData.length > this.maxContextSize) {
            this.contextData.shift(); // Remove oldest data if exceeding new size
        }
    }
}

// Example usage
const contextExpander = new ContextExpansion();
contextExpander.addData('New data point');
console.log(contextExpander.getCurrentContext());
contextExpander.setContextSize(500); // Adjust context size
