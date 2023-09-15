function Graduation(){
    const myJSON_end = '["Album: Graduation", "Reproduções: 2.579.628", "Lançamento: 1 Jan 2007", "Quantas faixas: 13"]';
    console.log(myJSON_end)

    const myArray_end= JSON.parse(myJSON_end)
    console.log(myArray_end)

    document.getElementById("ye").innerHTML=
        "<p><img src=img/graduation.jpg alt='40' widht='500' height='400'>" + 
        "<p>"+myArray_end[0]+"<\p>"+
        "<p>"+myArray_end[1]+"<\p>"+
        "<p>"+myArray_end[2]+"<\p>"+
        "<p>"+myArray_end[3]+"<\p>" 
}
function MBDTF(){
    const myJSON_end = '["Album: My Beautiful Dark Twisted Fantasy", "Reproduções: 2.153.591", "Lançamento: 1 Jan 2010", "Quantas faixas: 13"]';
    console.log(myJSON_end)

    const myArray_end= JSON.parse(myJSON_end)
    console.log(myArray_end)

    document.getElementById("ye").innerHTML=
        "<p><img src=img/MBDTF.jpg alt='40' widht='500' height='400'>" + 
        "<p>"+myArray_end[0]+"<\p>"+
        "<p>"+myArray_end[1]+"<\p>"+
        "<p>"+myArray_end[2]+"<\p>"+
        "<p>"+myArray_end[3]+"<\p>" 
}
function Heart(){
    const myJSON_end = '["Album: 808s & Heartbreak", "Reproduções: 2.081.046", "Lançamento: 1 Jan 2008", "Quantas faixas: 12"]';
    console.log(myJSON_end)

    const myArray_end= JSON.parse(myJSON_end)
    console.log(myArray_end)

    document.getElementById("ye").innerHTML=
        "<p><img src=img/808.png  alt='40' widht='500' height='400'>" + 
        "<p>"+myArray_end[0]+"<\p>"+
        "<p>"+myArray_end[1]+"<\p>"+
        "<p>"+myArray_end[2]+"<\p>"+
        "<p>"+myArray_end[3]+"<\p>" 
}
function Late(){
    const myJSON_end = '["Album: Late Registration", "Reproduções: 1.827.689", "Lançamento: 1 Jan 2005", "Quantas faixas: 21"]';
    console.log(myJSON_end)

    const myArray_end= JSON.parse(myJSON_end)
    console.log(myArray_end)

    document.getElementById("ye").innerHTML=
        "<p><img src=img/late.jpg alt='40' widht='500' height='400'>" + 
        "<p>"+myArray_end[0]+"<\p>"+
        "<p>"+myArray_end[1]+"<\p>"+
        "<p>"+myArray_end[2]+"<\p>"+
        "<p>"+myArray_end[3]+"<\p>" 
}
function Yeezus(){
    const myJSON_end = '["Album: Yeezus", "Reproduções: 1.532.602", "Lançamento: 1 Jan 2013", "Quantas faixas: 10"]';
    console.log(myJSON_end)

    const myArray_end= JSON.parse(myJSON_end)
    console.log(myArray_end)

    document.getElementById("ye").innerHTML=
        "<p><img src=img/yeezus.jpg  alt='40' widht='500' height='400'>" + 
        "<p>"+myArray_end[0]+"<\p>"+
        "<p>"+myArray_end[1]+"<\p>"+
        "<p>"+myArray_end[2]+"<\p>"+
        "<p>"+myArray_end[3]+"<\p>" 
}