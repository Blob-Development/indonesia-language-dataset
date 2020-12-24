let config = {
  iterationState: 25000,
  log: true,
  threshold: 0.0025, 
  lr: 0.01, // Perfect rate, 1e-4.
  momentum: 0.9,
  hidden_layers: [23],
  noPerms_msg: "prohibited:perms:FLAGS",
  input: {},
  output: {},
  state_between: [2, 178, 413],
  timeout_training: ['v1', Infinity]
};

module.exports = config;
