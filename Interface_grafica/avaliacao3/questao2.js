const usuario = {
    "autor": "Demetrio Mestre",
    "endereco": {
        "rua": "Rua Qualquer",
        "suite": "JS",
        "cidade": "Campina Grande",
        "CEP": "581415-145",
        "geo": {
            "lat": "13.51",
            "lng": "52.54"
        }
    }
}

let {autor, endereco:{cidade,geo:{lat,lng}}}=usuario;

const resultado = `${autor} - ${cidade} (${lat}, ${lng})`;
console.log(resultado);