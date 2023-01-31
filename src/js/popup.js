
function setUserDetails(data) {
    let value = data
    chrome.storage.sync.set({ user: value }, function () {
        console.log('Value is set to ', value);
    });
}

