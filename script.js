flatpickr("#data", {
    locale: "pt",
    dateFormat: "d/m",
    altInput: true,
    altFormat: "d/m",
});

function gerarScript() {
    const titulo = document.getElementById('titulo').value;
    const idOs = document.getElementById('idOs').value;
    const cliente = document.getElementById('cliente').value;
    const descricao = document.getElementById('descricao').value;
    const periodo = document.getElementById('periodo').value;
    const data = document.getElementById('data').value;
    const obs = document.getElementById('obs').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const atendente = document.getElementById('atendente').value;

    let script = idOs.trim() === "" ? 
        `-------------------------------------------
${titulo} 
CLIENTE: ${cliente} 
DESCRIÇÃO: ${descricao} 
PERÍODO: ${periodo} 
DATA: ${data} 
OBS: ${obs} 
ENDEREÇO: ${endereco} 
ATENDENTE: ${atendente} 
TELEFONE: ${telefone} 
-------------------------------------------` : 
        `*${titulo}* 
ID OS: ${idOs} 
CLIENTE: ${cliente} 
DESCRIÇÃO: ${descricao} 
PERÍODO: ${periodo} 
DATA: ${data} 
OBS: ${obs} 
ENDEREÇO: ${endereco} 
ATENDENTE: ${atendente} 
TELEFONE: ${telefone}`;

    document.getElementById('output').textContent = script;
    document.getElementById('copyButton').style.display = 'inline-block';
}

function copiarScript() {
    const outputText = document.getElementById('output').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        const alerta = document.createElement("div");
        alerta.style.cssText = "display: block; position: fixed; top: 0; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";

        const alertaInner = document.createElement("div");
        alertaInner.style.cssText = "margin: 0 auto; box-shadow: 1px 1px 5px black; padding: 10px; background-color: #007bff; color: white; text-align: center; font-size: 14px; border-radius: 4px;";
        alertaInner.textContent = "Máscara copiada!";

        alerta.appendChild(alertaInner);
        document.body.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 1100);
    }).catch(error => {
        alert('Falha ao copiar: ' + error);
    });
}

function limparDados() {
    document.getElementById('titulo').value = '';
    document.getElementById('idOs').value = '';
    document.getElementById('cliente').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('periodo').value = '';
    document.getElementById('data').value = '';
    document.getElementById('obs').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('atendente').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('copyButton').style.display = 'none';
}
