module.exports = {
  use: [
    "@factorial/frontend-stack-core"
  ],
  options: {
    source: "source",
    output: "../templates/build",
    mains: {
      index: "index.js"
    }
  }
};