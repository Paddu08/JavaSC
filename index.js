alert('hello')
const pass='12344@'
 if(pass.length >=3 &
     pass.includes('@') ){
    console.log('strong')
 }

 
//const speak=function(name ='awb'){
 //   console.log("hello {name}");

 //};
 const speak= (name) => `hello world ${name}`;
const gret=speak(`123`);
console.log(gret);

 const calcarea =radius =>3.14*radius**2;
 const area=calcarea(5);
 console.log('area is '+area)
 
 let user={
    name:'hello', 
    age:20,
    email:'123@123.com',
    locations:['udada','adada'],
    login:function login() {
        console.log('hi');
    
    },
    logblogs(){
        this.locations.forEach(location=>
            console.log(location));
        
    }
}   

const para=document.getElementById('para');
console.log(para)

    
user.login();
user.logblogs;