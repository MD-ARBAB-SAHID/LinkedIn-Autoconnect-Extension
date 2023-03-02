// Running the function that will trigger script injection
const RunScript = () => {
  const tabId = getCurrentTab();
  console.log(tabId);
  tabId.then((data) => {
    chrome.scripting
      .executeScript({
        target: { tabId: data },
        function: SendConnectionRequest,
      })
      .then(() => console.log("script injected "));
  });
};
