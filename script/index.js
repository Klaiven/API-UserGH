let user = document.getElementById('user');
let btn = document.getElementById('btn');
let main = document.getElementById('conteudo');

function pesquisar() {
    const userName = user.value; // Obtém o valor do campo de entrada

    if (userName) { // Verifica se o nome de usuário não está vazio
        const perfil = `<section>
            <img src="" alt="User Image" id="img">
            <aside>
                <p id="login">User</p>
                <div class="seg">
                    <p> <span id="followers"></span> Seguidores</p>
                    <p> <span id="following"></span> Seguindo</p>
                </div>
                <p id="gen">Descrição: <span id="descricao"></span></p>
            </aside>
        </section>`;

        fetch('https://api.github.com/users/' + userName)
            .then(function (respostaServidor) {
                return respostaServidor.json();
            })
            .then(function (respostaConvertida) {
                console.log(respostaConvertida);

                let avatar = respostaConvertida.avatar_url;

                // Atualize os elementos no DOM com os dados da API
                    if(respostaConvertida.login != undefined){
                        document.getElementById('login').innerHTML = respostaConvertida.login;
                        document.getElementById('followers').innerHTML = respostaConvertida.followers;
                        document.getElementById('following').innerHTML = respostaConvertida.following;
                        document.getElementById('img').src = avatar;
                            if(respostaConvertida.bio != null && respostaConvertida.bio != "" && respostaConvertida != " "){
                                document.getElementById('descricao').innerHTML = respostaConvertida.bio;
                            }else{
                                document.getElementById('descricao').innerHTML = "* Sem Descrição *";
                            }
                    }else{
                        let errouser = document.getElementById('user');
                        errouser.classList.add('nouser');
                        let errobtn = document.getElementById('btn');
                        errobtn.classList.add('nouser');
                    }
            })
            .catch(function (error) {
                console.error("Erro na requisição: " + error);
            });

        main.innerHTML = perfil;

    }
}





user.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        pesquisar(); // Chame a função pesquisar ao pressionar Enter
    }
});
