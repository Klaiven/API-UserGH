let user = document.getElementById('user');
let btn = document.getElementById('btn');
let main = document.getElementById('conteudo');

function pesquisar(){
    
    if((user !== "") && (user !== null) && (user !== undefined)){

        // let perfil = ` `;
        

        let dados = fetch('https://api.github.com/users/' + user.value)
        .then(function(respostaServidor){
            return respostaServidor.json()
        })
        .then(function(respostaConvertida){
            console.log(respostaConvertida);

            document.getElementById('login').innerHTML = 'User: ' + respostaConvertida.login;

            document.getElementById('followers').innerHTML = 'Seguidores: ' + respostaConvertida.followers;

            document.getElementById('following').innerHTML = 'Seguindo: ' + respostaConvertida.following;

            document.getElementById('descricao').innerHTML = 'Descrição: ' + respostaConvertida.bio;
        })
        
        
        // main.innerHTML += perfil;
        
    }
}

user.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
})