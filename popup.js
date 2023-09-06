document.addEventListener('DOMContentLoaded', function() {
  var highlightButton = document.getElementById('highlightButton');
  console.log('DOMContentLoaded event has fired.');
  
  highlightButton.addEventListener('click', function() {
    console.log('Highlight button clicked.');
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      });
      console.log('Content script executed.');
    });
  });
});
