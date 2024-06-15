/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// Verifica se há dados salvos no localStorage
const savedData = localStorage.getItem('formData');

// Se houver dados salvos, converte de JSON para objeto JavaScript
if (savedData) {
    const formData = JSON.parse(savedData);

    // Resgata o nome do objeto formData
    const userName = formData.name;

    // Seleciona o elemento <a> pelo ID nav__logo
    const navLogo = document.getElementById('nav__logo');

    // Define o nome do usuário como texto dentro do elemento <a>
    navLogo.textContent = userName;
}

 function Perfil() {
    window.location.href = 'https://profile.websmedu.com.br/'
 }
