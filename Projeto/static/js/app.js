

const $textNome = document.querySelector('.input_nome')
const $textSenha = document.querySelector('.input_senha')
const $btnLogin = document.querySelector('.btn_login')

$btnLogin.onclick = function () {
autenticar();
};
$textSenha.onkeypress = function (event, ) { 
    if (event.which === 13) { 
        console.log($textSenha.value);
            autenticar();
        }
};

function autenticar() {
    const timeOut = setTimeout( x , 500);
    function x () {
        if ($textNome.value == lg && $textSenha.value == sn) {
            $btnLogin.onclick = window.location.href = "./html/dashboard.html";
        } else {
            if ($textNome.value !== lg) {
                $textNome.style.borderColor = "red";
            }
            if ($textSenha.value !== sn) {
                $textSenha.style.borderColor = "red";
                $textSenha.style.backgroundimage = "red";
            }
        }
    }
}

