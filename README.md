# NASA APOD popup
Google Chrome extension that opens a small popup window showing a NASA APOD (Astonomy Picture of the Day)

### Space Apps Next Gen
In popups.js, you'll see some notes about seeing the data you get from the apod api. There are also challenges to add user interaction or timing to change the picture.

Jquery and Bootstrap are both included in the html. There are lots of resources out there for using both of these! Start here: https://jquery.com/ and here: http://getbootstrap.com/components/

Also, find a better picture to use for the extension icon! See the resources at the bottom for more info.

### Load the extension
Extensions that you download from the Chrome Web Store are packaged up as .crx files, which is great for distribution, but not so great for development. Recognizing this, Chrome gives you a quick way of loading up your working directory for testing. Let's do that now.

Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

Ensure that the Developer mode checkbox in the top right-hand corner is checked.

Click Load unpacked extension… to pop up a file-selection dialog.

Navigate to the directory in which your extension files live, and select it.

Alternatively, you can drag and drop the directory where your extension files live onto chrome://extensions in your browser to load it.

If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.

adapted from: https://developer.chrome.com/extensions/getstarted


### Resources
- debugging guide: https://developer.chrome.com/extensions/tut_debugging
- developers guide: https://developer.chrome.com/extensions/api_index
