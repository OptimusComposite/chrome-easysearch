
window.onload = function () {
    let newtab = document.getElementById('searchbutton')

    newtab.onclick = function () {
        let searchengine = "https://www.google.com/search?newwindow=1"
        let searchsite = "stackoverflow.com"
        let searchkeyword = document.getElementById('keyword').value
        let myurl = searchengine + "&q=site%3A" + searchsite + "+" + searchkeyword
        chrome.tabs.create({url: myurl})
    }
}
