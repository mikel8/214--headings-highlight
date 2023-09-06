function highlightHeadings() {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  console.log(headings);

  headings.forEach(function(heading) {
    const level = parseInt(heading.tagName.substring(1));
    const color = getHeadingColor(level);
    console.log(level, color);

    heading.style.outline = `3px solid ${color} !important`;
    console.log(heading);

  });
}

function getHeadingColor(level) {
  switch (level) {
    case 1:
      return 'red';
    case 2:
      return 'orange';
    case 3:
      return 'yellow';
    case 4:
      return 'green';
    case 5:
      return 'blue';
    case 6:
      return 'violet';
    default:
      return 'black';
  }
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'highlightHeadings') {
    highlightHeadings();
    sendResponse(true);
  }
});
