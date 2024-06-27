// for (let i=1; i<=10; i++){ 
//     console.log("Hello number " +i + "!");
// }

// for (let i=1; i<=10; i +=2){ 
//     console.log("Hello number " +i + "!");
// }

// versi for loop
// for (let i=10; i>0; i++){
//     console.log("Hello number " + i);
// }


// versi while loop
// var count= 1;
// while (count <= 10){
//     console.log("Hello number " + count);
//     count++;
// }


// versi do...while
// do {
//     console.log("Hello");
// } while (false);


// var count= 1
// do {
//     console.log("Hello ke-" + count);
//     count++;
// } while (count <= 10);


// //versi break
// var count=1
// while (true){
//     console.log(count);
//     if (count == 10) break; //kalo gapake break, pasti infinite loop
//     count++;
// }


// versi continue
for (let i=1; i<=5; i++){
    if (i === 2 || i===3 || i===4) continue; //jadi nnti angka 2&3&4 di skip
    console.log(i);
}

