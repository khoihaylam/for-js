let h1=document.getElementById("h1")
for(let i=1;i<=50;i++){
    if(i%2==0){
        h1.style.color="green"
        console.log(h1.style.color,i)
        }
    else{
        h1.style.color="red"
        console.log(h1.style.color,i)
        }
    }
// cau2
let a=Number(prompt("nhap gia tri 1"))
let b=Number(prompt("nhap gia tri 2"))
while (a<b){
    a++
    if(a<b){
        alert("gia tri 1 k dc nho hon gia tri 2")
    }
    else{
        break
    }
    console.log(a)
}
// cau 3:
for(let i=100;i>=1;i--){
    if(i%3==0){
        h1.style.color="red"
        console.log(h1.style.color,i)
    }
    else{
        h1.style.color="green"
        console.log(h1.style.color,i)
    }
}
// cau4:
for(let i=20;i<=1500;i++){
    if(i%300!=0){
        console.log(i)
    }
}
// cau5 
for(let i=1;i<11;i++){
    for(let j=1;j<11;j++){
        let a=i*j
        console.log(`${i}*${j}=${a}`)
    }
}