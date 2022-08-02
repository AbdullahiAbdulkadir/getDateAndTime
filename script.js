let today = new Date();
console.log(today);
let dd = today.getDate();
console.log(dd);
let mm = today.getMonth() + 1;
console.log(mm);
let yy = today.getFullYear();

today = '${dd}-${mm}-${yy}';
console.log(today);