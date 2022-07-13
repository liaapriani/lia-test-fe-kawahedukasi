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

const rightTriangle = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    console.log(string);
    string = "";
  }
};
rightTriangle(5);
