// Selecionar a Seção About
const about = document.querySelector("#about");

// Selecionar o formulario
const formulario = document.querySelector('#formulario');

// Expressão Regular para validação de e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Função para buscar os dados no GitHub
async function getApiGitHub() {
    try {

        //Paso 01: Fazer uma Requisição GET para a API do GitHub
        const dadosPerfil = await fetch("https://api.github.com/users/Rayssa-Ferraz");

        //Paso 02: Converter a resposta da API para JSON
        const perfilJson = await dadosPerfil.json();

        //Paso 03: Criar o HTML/CSS com os dados do Perfil

        let conteudo = `

        <<!-- FOTO DO PERFIL -->
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure>
 
            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">
                <h2>Sobre Mim</h2>
                <p>Oi, eu sou a Rayssa — mãe, curiosa por natureza e apaixonada por tecnologia. Entrei na área para
                    transformar minha vida, construir estabilidade para minha família e mostrar aos meus filhos que
                    sempre é possível recomeçar e evoluir.
                    Sou estudante de Gestão da Tecnologia da Informação na UNIP e aluna do Bootcamp Full Stack Java +
                    React da Generation Brasil. Estou desenvolvendo minhas habilidades em Java, Spring Boot, MySQL e
                    boas práticas de desenvolvimento, avançando para o front-end para me tornar uma desenvolvedora
                    completa.</p>
                <p>Carrego valores que guiam minha jornada: disciplina, empatia, colaboração e aprendizado contínuo.
                    Acredito na tecnologia como ferramenta de transformação e impacto real.
                    Aqui você acompanha meus projetos, minha evolução e a construção do meu futuro na TI.</p>

                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                   
                    <!-- Faltou esta div para alinhar os cards -->
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>
 
                </div>
            </article>
 
        `

        //PASSO 04: Adicionar o HTML dentro da Seção About

        about.innerHTML += conteudo;

    } catch (error) {
        console.error(error);
    }
}

//Função de envio e validação do formulário
formulario.addEventListener('submit', function (event) {
    //Impedir o envio automático do formulário
    event.preventDefault();

    //Validação do campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    //Nome deve ter no mínimo 3 caracteres
    if (campoNome.value.length < 3) {
        txtNome.innerHTML = 'Nome deve ter no mínimo 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = '';
    }

    //Validação do campo e-mail
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    //Verifica se o e-mail é válido
    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'E-mail inválido. Digite um e-mail válido.';
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = '';
    }

    //Validação do campo assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');
    
    //Assunto deve ter no mínimo 5 caracteres
    if (campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = 'Assunto deve ter no mínimo 5 caracteres.';
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = '';
    }

    //Se todas as validações passarem, enviar o formulário
    formulario.submit();
});    

//Chamar a função getApiGitHub

getApiGitHub();
