AOS.init();

const meuAniversario = new Date("Apr 08, 2023 12:00:00");
const timeStampAniver = meuAniversario.getTime();

const timer = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaNiver = timeStampAniver - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const HoraEmMS = 1000 * 60 * 60; 
    const minutoEmMs = 1000 * 60;


    const diasAteNiver = Math.floor(distanciaNiver / diaEmMs);
    const horasAteNiver = Math.floor((distanciaNiver % diaEmMs) / HoraEmMS);
    const minutosAteNiver = Math.floor((distanciaNiver % HoraEmMS) / minutoEmMs);
    const segundosAteNiver = Math.floor((distanciaNiver % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteNiver}d ${horasAteNiver}h ${minutosAteNiver}m ${segundosAteNiver}s`

    if (distanciaNiver < 0) {
        clearInterval(timer)
        document.getElementById('contador').innerHTML = 'Já foi meu aniversário'
    }
}, 1000);

const form = document.getElementById('form-invite');
const input = document.getElementById('name');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nome = input.value;

    alert(`OBA! ${nome}, seu nome foi adicionado na lista!`)
})