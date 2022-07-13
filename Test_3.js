//segitiga 1
function segitiga1(baris){
    let pola = '';

    for(let i = 1; i <= baris; i++){
        for(let j = 1; j <= i; j++){
            pola += '*';
        }

        pola += '\n';
    }

    return pola;
}

console.log(segitiga1(6));

//segitiga 2

function segitiga2(batis){
    let pola = '';

    for(let i = 1; i <= baris; i++){
        for(let j = baris - 1; j >= i; j++){
            pola += ' ';
        }

        for(let k = 1; k <= i; k++){
            pola += '*';
        }

        pola += '\n;'
    }

    return pola;
}

console.log(segitiga2(6));
