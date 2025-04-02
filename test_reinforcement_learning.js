// Test Script for Reinforcement Learning Model
const ReinforcementLearning = require('./ml-integration/reinforcement_learning');


const rlModel = new ReinforcementLearning();
rlModel.updatePolicy(10); // Simulate updating the policy
const decision = rlModel.makeDecision('current_state'); // Make a decision based on the current state

console.log('Decision made by the reinforcement learning model:', decision);
