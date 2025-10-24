iconWhatsapp = document.querySelector(".whatsapp")
closeW = document.querySelector(".close")
sendWhatsapp = document.querySelector(".whatsapp-wrap")
btnWhatsapp = document.querySelector(".whatsapp-btn")

function toggleWhatsapp() {
  iconWhatsapp.classList.toggle("opacity")
  sendWhatsapp.classList.toggle("opacity")
}

iconWhatsapp.addEventListener("click", toggleWhatsapp)
closeW.addEventListener("click", toggleWhatsapp)
btnWhatsapp.addEventListener("click", toggleWhatsapp)

window.addEventListener('click', function(event) {
    const isWhatsappOpen = !sendWhatsapp.classList.contains('opacity');
    const clickedOutside = !sendWhatsapp.contains(event.target) && !iconWhatsapp.contains(event.target);

    if (isWhatsappOpen && clickedOutside) {
        toggleWhatsapp();
    }
});


document.addEventListener('DOMContentLoaded', function() {
  
  // Seleciona os elementos
  const modal = document.getElementById('modal-orcamento');
  const closeModalBtn = document.getElementById('close-modal');
  
  // Seleciona TODOS os botões que devem abrir o modal
  const openModalBtns = document.querySelectorAll('.btn-budget');

  // Função para abrir o modal
  function openModal() {
    modal.style.display = 'flex';
  }

  // Função para fechar o modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // Adiciona o evento de clique a cada botão "Orçamento Grátis"
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  // Adiciona o evento de clique ao botão de fechar (X)
  closeModalBtn.addEventListener('click', closeModal);

  // Adiciona o evento de clique para fechar o modal se clicar no fundo escuro
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

});


/*MENU MOBILE*/
const menu = document.querySelector(".menu")
const closed = document.querySelector(".closed")
const mobileHeader = document.querySelector(".mobile-header")

const enable = "enable-nav-mobile"


menu.addEventListener("click", ()=>{
  menu.classList.remove(enable)
  mobileHeader.classList.add(enable)
})

closed.addEventListener("click", ()=>{
  mobileHeader.classList.remove(enable)
  menu.classList.add(enable)
})

// fechar ao clicar fora do menu
document.addEventListener("click", (e) => {
  const clickDentroDoMenu = mobileHeader.contains(e.target) || menu.contains(e.target);
  if (!clickDentroDoMenu) {
    mobileHeader.classList.remove(enable);
  }
});

// fechar ao clicar em qualquer link dentro do menu
const links = mobileHeader.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileHeader.classList.remove(enable);
  });
});