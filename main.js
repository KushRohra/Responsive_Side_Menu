const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', openSideMenu);
close.addEventListener('click', closeSideMenu);

function openSideMenu()
{
    const sideMenu = document.getElementById('side-menu');
    const heading = document.getElementById('main');

    sideMenu.style.width = '250px';
    heading.style.marginLeft = '250px';
}

function closeSideMenu()
{
    const sideMenu = document.getElementById('side-menu');
    const heading = document.getElementById('main');

    sideMenu.style.width = '0';
    heading.style.marginLeft = '0';
}