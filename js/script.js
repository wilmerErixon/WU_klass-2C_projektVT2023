const burger = document.getElementById('burger')
const link_list = document.getElementById('link_list')

function toggleMenu() {
    link_list.classList.toggle('link_list_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)