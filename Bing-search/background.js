chrome.contextMenus.create({
  title: "Bing Search",
  contexts: ["selection"],
  onclick : youtube
});

function youtube(selectedText){
  chrome.tabs.create({url: "https://www2.bing.com/search?q="+selectedText.selectionText})
}
