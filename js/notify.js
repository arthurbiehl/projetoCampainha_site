async function enviarMensagem(nome, texto, imagemCapturada) {
    const token = "8171652772:AAEJnfGt4upP_dcQCbDvDsJl7jBcTAQ8224";
    const chatId = "-4989648744";
    const site = "https://projetocampainha-site.onrender.com/pages/residencia"

    const mensagem = `🔔 Sua campainha esta tocando, veja quem é! 🚪 \n👤 Nome: ${nome} \n💬 Mensagem: ${texto} \n Veja no Site: ${site}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: mensagem,
            parse_mode: "Markdown"
        })
    });

    const blob = await (await fetch(imagemCapturada)).blob();
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("photo", blob, "foto.png");

    await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
        method: "POST",
        body: formData
    });

    alert("Mensagem enviada no Telegram!");

    limparFormulario()
}

function verificarResposta() {
    const resposta = localStorage.getItem("respostaCampainha");
    if (!resposta) return;

    const { resposta: status, dataResposta } = JSON.parse(resposta);

    if (Date.now() - dataResposta < 2 * 60 * 1000) {
        alert(`Resposta da residência: ${status === 'aceito' ? 'Já esta indo atender!' : 'CHAMADA IGNORADA'}`);
        localStorage.removeItem("respostaCampainha");
    }
}

setInterval(verificarResposta, 1000);
