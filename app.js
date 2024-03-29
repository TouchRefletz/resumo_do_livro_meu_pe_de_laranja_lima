var nav = document.querySelector('.header__nav');
var header = document.querySelector('.header');
var icon = document.querySelector('.icon');
var header_principal = document.querySelector(".header__nav-mobile");
var header_mobile = document.querySelector(".header__nav__links-mobile");
var details = document.querySelector('.header__nav__links__item-mobile__details');
var details_text = document.querySelectorAll('.header__nav__links__item-mobile__details__link');
var sumarry = document.querySelectorAll('.sumarry-content');
atualizarLarguraTela();
window.addEventListener('resize', function() {
    atualizarLarguraTela();
});
function atualizarLarguraTela() {
    var width_tela = window.innerWidth;
    if (width_tela < 1200) {
        header_mobile.innerHTML = '<details class="header__nav__links__item-mobile">' +
    '<summary><a class="sumarry-content">Indice</a></summary>' +
    '<ul>' +
        '<li><details class="header__nav__links__item-mobile">' +
            '<summary><a class="sumarry-content">Primeira parte</a></summary>' +
            '<ul class="header__nav__links__item-mobile__details">' +
                '<li><a href="#o-descobridor-de-coisas" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O descobridor de coisas</a></li>' +
                '<li><a href="#um-certo-pe-de-laranja-lima" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Um certo pé de laranja lima</a></li>' +
                '<li><a href="#os-dedos-magros-da-pobreza" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Os dedos magros da pobreza</a></li>' +
                '<li><a href="#o-passarinho-a-escola-e-a-flor" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O passarinho, a escola e a flor</a></li>' +
                '<li><a href="#numa-cadeia-eu-hei-de-ver-te-morrer" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">"Numa cadeia eu hei de ver-te morrer"</a></li>' +
            '</ul>' +
        '</details></li>' +
        '<li><details class="header__nav__links__item-mobile">' +
            '<summary><a class="sumarry-content">Segunda parte</a></summary>' +
            '<ul class="header__nav__links__item-mobile__details">' +
                '<li><a href="#o-morcego" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O morcego</a></li>' +
                '<li><a href="#a-conquista" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">A conquista</a></li>' +
                '<li><a href="#conversas-para-la-e-para-ca" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Conversa para lá e para cá</a></li>' +
                '<li><a href="#duas-surras-memoraveis" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Duas surras memoráveis</a></li>' +
                '<li><a href="#suave-e-estranho-pedido" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Suave e estranho pedido</a></li>' +
                '<li><a href="#de-pedaco-em-pedaco-e-que-se-faz-ternura" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">De pedaço em pedaço é que se faz ternura</a></li>' +
                '<li><a href="#o-mangaratiba" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O mangaratiba</a></li>' +
                '<li><a href="#tantas-sao-as-velhas-arvores" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Tantas são as velhas árvores</a></li>' +
                '<li><a href="#a-confissao-final" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">A confissão final</a></li>' +
            '</ul>' +
        '</details></li>' +
        '<li><a class="header__nav__links__item-mobile" href="#conclusao">Conclusão</a></li>' +
    '</ul>' +
'</details>' +
'<a class="header__nav__links__item-mobile" id="participantes" href="#footer">Participantes</a>';
        nav.classList.add('disabled');
        header.style.justifyContent = 'space-between';
        icon.classList.remove('disabled');
        header_mobile.style.flexDirection = 'column';
        details.style.flexDirection = 'column';
        var elementoAdicionar = document.getElementById('participantes');
        if (!elementoAdicionar) {
            var novoLink = document.createElement("a");
            novoLink.className = "header__nav__links__item-mobile";
            novoLink.id = "participantes";
            novoLink.href = "#footer";
            novoLink.textContent = "Participantes"; 
            header_mobile.appendChild(novoLink);
        }        
    } else {
        header_mobile.innerHTML = '<details class="header__nav__links__item-mobile">' +
        '<summary><a class="sumarry-content">Primeira parte</a></summary>' +
        '<ul class="header__nav__links__item-mobile__details">' +
            '<a href="#o-descobridor-de-coisas" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O descobridor de coisas</a>' +
            '<a href="#um-certo-pe-de-laranja-lima" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Um certo pé de laranja lima</a>' +
            '<a href="#os-dedos-magros-da-pobreza" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Os dedos magros da pobreza</a>' +
            '<a href="#o-passarinho-a-escola-e-a-flor" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O passarinho, a escola e a flor</a>' +
            '<a href="#numa-cadeia-eu-hei-de-ver-te-morrer" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">"Numa cadeia eu hei de ver-te morrer"</a>' +
        '</ul>' +
    '</details>' +
    '<details class="header__nav__links__item-mobile">' +
        '<summary><a class="sumarry-content">Segunda parte</a></summary>' +
        '<ul class="header__nav__links__item-mobile__details">' +
            '<a href="#o-morcego" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O morcego</a>' +
            '<a href="#a-conquista" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">A conquista</a>' +
            '<a href="#conversas-para-la-e-para-ca" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Conversa para lá e para cá</a>' +
            '<a href="#duas-surras-memoraveis" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Duas surras memoráveis</a>' +
            '<a href="#suave-e-estranho-pedido" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Suave e estranho pedido</a>' +
            '<a href="#de-pedaco-em-pedaco-e-que-se-faz-ternura" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">De pedaço em pedaço é que se faz ternura</a>' +
            '<a href="#o-mangaratiba" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">O mangaratiba</a>' +
            '<a href="#tantas-sao-as-velhas-arvores" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">Tantas são as velhas árvores</a></li>' +
            '<a href="#a-confissao-final" onclick="myFunction()" class="header__nav__links__item-mobile__details__link">A confissão final</a>' +
        '</ul>' +
    '</details>' +
    '<a class="header__nav__links__item-mobile" href="#conclusao">Conclusão</a>';
    var details_text = document.querySelectorAll('.header__nav__links__item-mobile__details__link');
    var sumarry = document.querySelectorAll('.sumarry-content');
    var conclusao = document.querySelectorAll('.header__nav__links__item-mobile');
        sumarry.forEach(function(element) {
            element.style.fontSize = '1.5rem';
        });
        conclusao.forEach(function(element) {
            element.style.fontSize = '1.5rem';
        });
        nav.classList.remove('disabled');
        header.style.justifyContent = 'center';
        header_mobile.style.justifyContent = 'center';
        header_principal.style.padding = '0 0 1% 0';
        icon.classList.add('disabled');
        header_mobile.style.flexDirection = 'row';
        details.style.flexDirection = 'row';
        details_text.forEach(function(element) {
            element.style.fontSize = '1.5rem';
        });
    }
}
function myFunction() {
    var x = document.querySelector('.header__nav-mobile');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      x.classList.remove('disabled');
    }
  }