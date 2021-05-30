const valido = document.getElementById('valido');
const aceptar = document.getElementById('aceptar');

if (valido) {
  valido.addEventListener('click', (e) => {
    const confirmar = document.getElementById('confirmar');
    confirmar.classList.add('aparecer');
  });

  if (aceptar) {
    aceptar.addEventListener('click', (e) => {
      const confirmar = document.getElementById('confirmar');
      confirmar.classList.remove('aparecer');
    });
  }
}

document.getElementById('btnNext').addEventListener('click', (e) => {
  const main = document.getElementById('main');
  main.classList.add('active');
});

document.getElementById('back').addEventListener('click', (e) => {
  const main = document.getElementById('main');
  main.classList.remove('active');
});




