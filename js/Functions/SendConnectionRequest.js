const SendConnectionRequest = () => {
  const ConnectButtonClassName =
    ".entity-result__actions.entity-result__divider .artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view";
  const ModalSendButtonClassName =
    ".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.ml1";

  // Getting List of buttons (Note :: It will include "connect" request buttons as well as "follow" button and "message" button)
  const buttons = document.querySelectorAll(ConnectButtonClassName);

  // Filtering "Connect" buttons only
  const connectButtons = [];

  buttons.forEach((element) => {
    // Checking the content of buttons that we have selected if innerHTML contains "Connect" we will add that button into connectButtons
    if (element.lastChild.innerHTML.trim() === "Connect")
      connectButtons.push(element);
  });

  // Adding timer to each connectButtons so that they will be automatically clicked

  const size = connectButtons.length;
  for (let i = 0; i < size; i++) {
    const callFunc = (i) => {
      const t = setTimeout(() => {
        connectButtons[i].click();

        // Getting modal button after clicking on connect
        setTimeout(() => {
          const sendButton = document.querySelector(ModalSendButtonClassName);
          if (sendButton) sendButton.click();
        }, 500);
      }, i * 2000);
    };
    callFunc(i);
  }
};
