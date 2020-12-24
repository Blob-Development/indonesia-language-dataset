let config = {
  iteration_state: 25000,
  training_log: true,
  training_error: 0.001, 
  lr: 0.01, // Perfect rate, 1e-4.
  momentum: 0.9,
  deep: true,
  hidden_layers: [23],
  forbidden_language: "prohibited:perms:FLAGS",
  input: {},
  output: {},
  state_: [2, 178, 413],
  timeout_training: ['v1', Infinity]
};

module.exports = config;
