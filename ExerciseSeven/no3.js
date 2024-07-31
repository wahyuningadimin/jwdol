// Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
var arr1= [
    {name: 'Student1', email: 'student1@mail.com'},
    {name: 'Student2', email: 'student2@mail.com'}
]
var arr2= [
    {name: 'Student1', email: 'student1@mail.com'},
    {name: 'Student3', email: 'student3@mail.com'}
]

// function merge(arr1, arr2){
//     let res= {};
//     arr1.forEach(student => {
//         const key= student.name + student.email;
//         res[key]= student;
//     })

//     arr2.forEach(student => {
//         const key= student.name + student.email;
//         res[key]= student;
//     })

//     let mergeRes= Object.values(res);
//     return mergeRes;
// }

// console.log(merge(arr1, arr2));


//versi Purwadhika
function mergeData(arr1, arr2){
    arr2.forEach((student) => {
        const idx= arr1.findIndex((value) => value.name == student.name && value.email == student.email)
        if (idx == -1) arr1.push(student)
    }) //looping array2, langkah pertama check indexnya. index mulai dari 0 keatas, kalo belum ada berarti indexnya -1. Karena gaada student3, berarti indexnya -1, jadinya di push.
return arr1 //jdi ini langsung balikin array1
}

console.log(mergeData(arr1, arr2));