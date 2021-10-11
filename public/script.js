let navbar_height = document.querySelector('.navbar').offsetHeight;
navbar_height += 10 //giving margin in bottom of navbar
document.getElementById('main').style.paddingTop = navbar_height + 'px';


let tabbar_height = document.querySelector('.tabBar').offsetHeight;
tabbar_height += 10 //giving margin in top of tab bar
document.getElementById('main').style.paddingBottom = tabbar_height + 'px';

import * as serviceWorker from './worker.js';

//  serviceWorker.register();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/classroom/worker.js', {scope: '/classroom/'}).then(function (registration) {
            console.log('Worker registration successful', registration.scope);
        }, function (err) {
            console.log('Worker registration failed', err);
        }).catch(function (err) {
            console.log(err);
        });
    });
} else {
    console.log('Service Worker is not supported by browser.');
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/classroom/worker.js', {scope: '/classroom/'}).then(function (registration) {
            console.log('Worker registration successful', registration.scope);
        }, function (err) {
            console.log('Worker registration failed', err);
        }).catch(function (err) {
            console.log(err);
        });
    });
} else {
    console.log('Service Worker is not supported by browser.');
}
