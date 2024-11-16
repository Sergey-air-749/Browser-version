document.getElementById('Browser-version-userAgent').innerHTML = window.navigator.userAgent;

document.getElementById('Browser-version-appVersion').innerHTML = window.navigator.appVersion;

document.getElementById('Browser-version-platform').innerHTML =
  window.navigator.platform;

// document.getElementById('Browser-version-toLowerCase').innerHTML = window.navigator.userAgent.toLowerCase();

const userAgent = navigator.userAgent;

// document.getElementById('info-full').innerHTML += userAgent;



if (userAgent.indexOf('Firefox') != -1) {
  document.getElementById('info').innerHTML += 'Firefox';

} else if (userAgent.indexOf('Chrome') != -1) {
  document.getElementById('info').innerHTML += 'Chrome';

} else if (userAgent.indexOf('Safari') != -1) {
  document.getElementById('info').innerHTML += 'Safari';

} else if (userAgent.indexOf('Opera') != -1) {
  document.getElementById('info').innerHTML += 'Opera';

} else if (userAgent.indexOf('SamsungBrowser') != -1) {
  document.getElementById('info').innerHTML += 'Samsung Internet';

} else if (userAgent.indexOf('YaBrowser') != -1) {
  document.getElementById('info').innerHTML += 'Яндекс Браузер';

} else {
  document.getElementById('info').innerHTML += 'Неизвестный браузер';
}



document.getElementById('Browser-version-location').innerHTML += window.location;

document.getElementById('Browser-version-host').innerHTML += window.location.host;

document.getElementById('Browser-version-hostname').innerHTML += window.location.hostname;

document.getElementById('Browser-version-href').innerHTML += window.location.href;

document.getElementById('Browser-version-origin').innerHTML += window.location.origin;


document.getElementById('Browser-version-pathname').innerHTML += window.location.pathname;

document.getElementById('Browser-version-port').innerHTML += window.location.port;

document.getElementById('Browser-version-protocol').innerHTML += window.location.protocol;