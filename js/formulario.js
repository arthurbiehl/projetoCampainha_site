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

    // Mostra visual da chamada
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="card">
            <h2>Sua chamada foi enviada!</h2>
            <img src="${imagemCapturada}" class="photo" />
            <h3>${nome}</h3>
            <p>${mensagem}</p>
        </div>
    `;
    document.getElementById("popup").classList.remove("hidden");

    // Salva localmente (para residência)
    localStorage.setItem("campainha", JSON.stringify({
        nome,
        mensagem,
        imagem: imagemCapturada,
        data: Date.now()
    }));

    // Envia para Telegram
    enviarMensagem(nome, mensagem, imagemCapturada);
}


function fecharPopup() {
    document.getElementById("popup").classList.add("hidden");
}
