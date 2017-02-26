var Request = new XMLHttpRequest();

Request.open("GET", location.href);
Request.setRequestHeader("Referrer", "http://viid.me/qcOmMI?utm_source=anigod.gryfindor.com&utm_medium=QL&utm_name=1");
Request.addEventListener("load", onSuccess);

function onSuccess() {
    document.execCommand('Stop');
    console.log(this.response);
}

window.onbeforeunload = function() {
    return alert("FUCK")
};