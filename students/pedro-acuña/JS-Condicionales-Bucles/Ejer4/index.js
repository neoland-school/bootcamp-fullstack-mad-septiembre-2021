let i = 1;
let j = 1;
let k = 4;
let l = 0;
while (i<6){
    document.write(`<p> </p> `);
    while(j <= i){
        document.write(`*`);
        j++;

    }
    i++; 
    j = 1;

}

while (k>0){
    document.write(`<p> </p> `);
    while(l < k){
        document.write(`*`);
        l++;

    }
    k--;    
    l = 0;

}