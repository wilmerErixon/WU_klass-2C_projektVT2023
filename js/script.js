const burger = document.getElementById('burger')
const link_list = document.getElementById('linkList')

function toggleMenu() {
    linkList.classList.toggle('linkList_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)