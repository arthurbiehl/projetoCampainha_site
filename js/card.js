let ultimaMensagem = 0;

function atualizarCard() {
    const dados = localStorage.getItem("campainha");
    if (!dados) return;

    const { nome, mensagem, imagem, data } = JSON.parse(dados);

    if (data > ultimaMensagem) {
        ultimaMensagem = data;

        document.getElementById("notificacao").innerHTML = `
            <div class="card">
                <h2>Campainha tocando!</h2>
                <img src="${imagem}" class="photo" style="width: 100%; max-width: 300px; border-radius: 10px;" />
                <h3>${nome}</h3>
                <p>${mensagem}</p>
                <div class="btn-card" style="margin-top: 10px;">
                    <button onclick="responderCampainha(true)">Aceitar</button>
                    <button onclick="responderCampainha(false)">Ignorar</button>
                </div>
            </div>
        `;
    }
}

function responderCampainha(aceito) {
    const resposta = {
        resposta: aceito ? 'aceito' : 'ignorado',
        dataResposta: Date.now()
    };

    localStorage.setItem("respostaCampainha", JSON.stringify(resposta));

    document.getElementById("notificacao").innerHTML = `
        <p>Você ${aceito ? 'aceitou' : 'ignorou'} a chamada.</p>
    `;
}

setInterval(atualizarCard, 1000);
