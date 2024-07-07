async function sayHello() {
  const [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => alert("hello form my extension!"),
  });
}

document.getElementById("myButton").addEventListener("click", sayHello);
