
/*  FETCH */


async function obternerData(){
    // const response = await fetch("http://127.0.0.1:5501/SECCION%202%20-%20TEORIA/JSON/data.json");
    
    const response = await fetch("https://api.github.com/repos/hadley/ggplot2/commits");
    

    const dataJson = await response.json();
    console.log(dataJson)
}

obternerData();




