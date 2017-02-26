chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {

    var headers = details.requestHeaders,
        blockingResponse = {};

    for (var i = 0, l = headers.length; i < l; ++i) {
        if (headers[i].name == 'Referer') {
            headers[i].value = 'http://viid.me/qcOmMI?utm_source=anigod.gryfindor.com&utm_medium=QL&utm_name=1';
            break;
        }
    }

    blockingResponse.requestHeaders = headers;
    return blockingResponse;
}, { urls: ["https://anigod.com/*"] }, ['requestHeaders']);