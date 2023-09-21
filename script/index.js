let user = document.getElementById('user');
let btn = document.getElementById('btn');
let main = document.getElementById('conteudo');
let image = document.getElementById('img')

function pesquisar(){
    
    if((user !== "") && (user !== null) && (user !== undefined)){

        const perfil = `<section>
        <img src="" alt="User Image" id="img">
        <aside>
            <p id="login">User</p>
    
            <div class="seg">
                <p> <span id="followers"></span> Seguidores</p>
                <p> <span id="following"></span>Seguindo</p>
            </div>
    
            <p id="gen">Descrição: <span id="descricao"></span></p>
        </aside>
        </section>`;

        const dados = fetch('https://api.github.com/users/' + user.value)
        .then(function(respostaServidor){
            return respostaServidor.json()
        })
        .then(function(respostaConvertida){
            console.log(respostaConvertida);

            document.getElementById('login').innerHTML = respostaConvertida.login;

            document.getElementById('followers').innerHTML = respostaConvertida.followers;

            document.getElementById('following').innerHTML = respostaConvertida.following;

            document.getElementById('descricao').innerHTML = respostaConvertida.bio;
            
        })
        
        main.innerHTML = perfil;
        
        console.log(respostaConvertida.bio);
    }
}

user.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
})