

async function fetchAut() {
    const response = await fetch('../json/autenticacao.json');
    const aut = await response.json();
    return aut;
    
}
(async () => {
    fetchAut().then(aut => {
sn = aut.senha        
lg = aut.usuario
return 
    });
})();


















