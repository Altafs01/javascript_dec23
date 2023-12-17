// ---------------------------------------promises functions (resolve, reject, pending)---------------------------------------------------
// var ans = new Promise((res, rej) => {
//     if (false) {
//         return res();
//     }

//     else {
//         return rej();
//     }
// })

// ans.then(function () {
//     console.log("resolve ho gaya hai");
// })
//     .catch(function () {
//         console.log("resolve nahi hua hai");
//     })
// ---------------------------------------------------------------------

// var ans = new Promise ((resolve, reject)=>{
//     var num = Math.floor(Math.random()*10);
//     if (num < 5){
//         return resolve (num);
//     }
//     else{
//         return reject(num);
//     }
// })

// ans.then(function(){
//     console.log("resolve ho gaya");
// })

// .catch(function(){
//     console.log("reject hua hai")
// })

// ----------------------------------------------------------------------------

// asynchoronous js------------------------------------


// ----------------------------promises chaining--------------------------------
// var ans = new Promise (function (res , rej){
//     return res("sabse pahle ghar pe aao")
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res , rej){
//         return res ("gate kholo aur gate lagao")
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("khana pakao khana kao")
//     })
// })

// p3.then(function(data){
//     console.log(data);
// });
// --------------------------------------------------------------------

// console.log("start")

// const promise1 = new Promise ((resolve, reject) =>{
//     console.log(1)
//     resolve(2);
// })

// promise1.then(res =>{
//     console.log(res);
// })

// console.log('end');
// -----------------------------------------------------------

// console.log('start');
// const promise1 = new Promise ((resolve, reject)=>{
// console.log(1);

//     resolve("Hello i am resolve");
//     reject("Hello i am reject");

// })

// console.log('hello my name is altaf')

// promise1.then (abc =>{
//     console.log(abc);

// })
// // .catch(abcd=>{
// //     console.log(abcd);
// // })


// console.log('hello');
// console.log('end');
// -------------------------------------------------------------------

// -----------------------promise in pending state----------------------
// console.log('start');
// const promise1 = new Promise ((res , rej)=>{
//     console.log(1);
//     // res(2);       // when we can't call the resolve, promise will be in pending state
   
// })

// promise1.then(res =>{
//     console.log(2);
// })

// console.log('end')
// ------------------------------------------------------------------


// console.log('start');

// const fn = ()=> (new Promise ((resolve, reject)=>{
//     console.log(1)
//     resolve("successfully resolved");
// }))

// console.log('middle');

// fn().then(res=>{
//     console.log(res);
// })

// console.log('end');
// ----------------------------------------------------------------------

// ---------------------------------------// setTimeOut vs promises----------------------------------------


// IN two asynchronous javascript concept meet together in or excuted together on same time.
// In JavaScript EventLoop, there is also the concept of priority.
// Tasks with higher priority are called microtasks. Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
// Tasks with lower priority are called macrotasks. Includes: setTimeout , setInterval and XHR . 

// console.log('start');
//     setTimeout (()=>{
//         console.log('settimeout');
//     })

//     Promise.resolve().then(()=>{
//         console.log('resolve')
//     })

// console.log('end');
// ----------------------------------------------------------------------

// -----------------------// Challenge 8: Microtasks mix Macrotasks-----------
// First, execute the synchronization code:
// Then execute microtask:
// Then execute macrotask:
// Here, first execute macrotask because here is a trap: Since the current promise is still in the pending state, the code in this will not be executed at present.


// const promise1 = new Promise ((resolve , reject)=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log('Timestart')
//         resolve ('resolve successfully'); 
//         console.log('Timeend');
//     },0)
//     console.log(2);
// })

// promise1.then(res=>{
//     console.log(res);
// });

// console.log(4);

// ---------------------------------------------------------------------------------------

// const timer1 = setTimeout (()=>{
//     console.log('Timer1');
//     // setTimeout(()=>{
//         const promise1 = Promise.resolve().then(()=>{
//             console.log('promise1')
//         })
//     // },0)
// }, 0)



// const timer2 = setTimeout(()=>{
//     console.log('Timer2');
// }, 0)


// var a = true;
// const book = new Promise ((resolve, reject) =>{
//     if(a && true){
//         resolve ();
//         console.log("resolve succefully");
//     }
//     else{
//         reject();
//         console.log("sorry you are rejected")
//     }
// })

// book.then(function(){
//     console.log("Congrutulation come for the next batch of mern stack");
// })
// .catch (function(){
//     console.log("Sorry you can't eligible for mern stack developer");
// })

// ------------------------------------------------------------------------------------------------

