// Adding click event to popup button. It will trigger the script injection inorder to send Connection Request
const startButton = document.getElementById("button-64");
startButton.addEventListener("click", () => {
  RunScript();
});
