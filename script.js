document.addEventListener("DOMContentLoaded", () => {
    const textoDiv = document.querySelector(".texto");

    const content = `
Olá! Eu sou Mateus Lins

Sou estudante de Ciência da Computação na CESAR School.

Tenho grande interesse e venho me aprofundando nas áreas de:
- Banco de Dados
- Desenvolvimento Back-End
- Segurança da Informação

Busco oportunidades de estágio onde eu possa aplicar meus conhecimentos, aprender com profissionais experientes e contribuir com soluções eficientes e seguras.

Estou sempre preparado para novos aprendizados e desafios no universo da tecnologia.
    `.trim(); 

    let index = 0;
    textoDiv.textContent = "";

    function typeWriter() {
        if (index < content.length) {
            textoDiv.textContent += content.charAt(index);
            index++;
            setTimeout(typeWriter, 10); 
        }
    }

    typeWriter();
});

