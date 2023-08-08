const script = document.createElement("script");
script.src = chrome.runtime.getURL("index.js");
document.documentElement.appendChild(script)