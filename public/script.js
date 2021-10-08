let navbar_height = document.querySelector('.navbar').offsetHeight;
navbar_height += 10 //giving margin in bottom of navbar
document.getElementById('main').style.paddingTop = navbar_height + 'px';


let tabbar_height = document.querySelector('.tabBar').offsetHeight;
tabbar_height += 10 //giving margin in top of tab bar
document.getElementById('main').style.paddingBottom = tabbar_height + 'px';