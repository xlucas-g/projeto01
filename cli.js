import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaURL from "./http-validacao.js";
import extraiLinks from "./exporta.js";


const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    const links = extraiLinks(resultado);   

    if(caminho[3] === 'valida'){
        console.log(("Links Validados:"), await validaURL(links));
    } else if (caminho[3] === 'links') {
    console.log(chalk.bgYellow.black("Lista de Links:"), links);
    } else if (caminho[3] === 'leitura'){
        console.log(chalk.bgYellow.black("Texto Completo:"), resultado);
    }
}

processaTexto(caminho);