var users = [
    {name: "Michael", age:37},
    {name: "John", age:30}, 
    {name: "David", age:2}];

console.log(users[1].age);

console.log(users[0].name);

for(x=0;x<users.length;x++){
console.log(users[x].name," - ",users[x].age);
}

function mayores (arr){
for(x=0; x < users.length; x++){
if(arr[x].age >=18)
console.log(users[x].name);
}
}
