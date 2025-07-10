const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const contexto = canvas.getContext('2d');
let imagemCapturada = '';

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(erro => {
        alert('Erro ao acessar a câmera: ' + erro);
    });

<<<<<<< HEAD
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
    canvas.style.display = 'none';
    imagemCapturada = '';
}

=======
>>>>>>> 2bcf798e2200c25cb573f85f96e79e974b15d4c0
function tirarFoto() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
    imagemCapturada = canvas.toDataURL('image/png');
    alert('Foto tirada com sucesso!');
}

function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!imagemCapturada || !nome || !mensagem) {
        alert('Preencha todos os campos e tire a foto.');
        return;
    }

<<<<<<< HEAD
    // Atualiza o card local em forma de pop-up
    const popup = document.getElementById('popup');
=======
    // Mostra visual da chamada
>>>>>>> 2bcf798e2200c25cb573f85f96e79e974b15d4c0
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = `
<<<<<<< HEAD
        <h1>Sua chamada!</h1>
        <img src="${imagemCapturada}" />
        <h3>${nome}</h3>
        <p>${mensagem}</p>
=======
        <div class="card">
            <h2>Sua chamada foi enviada!</h2>
            <img src="${imagemCapturada}" class="photo" />
            <h3>${nome}</h3>
            <p>${mensagem}</p>
        </div>
>>>>>>> 2bcf798e2200c25cb573f85f96e79e974b15d4c0
    `;
    document.getElementById("popup").classList.remove("hidden");

<<<<<<< HEAD
    popup.classList.remove('hidden');

    // 🔔 Armazena no localStorage
=======
    // Salva localmente (para residência)
>>>>>>> 2bcf798e2200c25cb573f85f96e79e974b15d4c0
    localStorage.setItem("campainha", JSON.stringify({
        nome,
        mensagem,
        imagem: imagemCapturada,
        data: Date.now()
    }));

    // Envia para Telegram
    enviarMensagem(nome, mensagem, imagemCapturada);
}

// fecha o pop-up
function fecharPopup() {
    document.getElementById('popup').classList.add('hidden');
}

<<<<<<< HEAD
localStorage.setItem("campainha", JSON.stringify({
    nome,
    mensagem,
    imagem: imagemCapturada,
    data: Date.now()
}));
=======
function fecharPopup() {
    document.getElementById("popup").classList.add("hidden");
}
>>>>>>> 2bcf798e2200c25cb573f85f96e79e974b15d4c0
