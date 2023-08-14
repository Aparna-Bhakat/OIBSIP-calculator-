
// let input= document.getElementById ('inputBox');
// let buttons=document.querySelectorAll('.button');
// let string="";
// let arr =Array.from (buttons);
// arr.forEach(button=> {
//     button.addEventListener('click',(e) => {
//         if(e.target.innerHTML === '='){
//             try {
//                  const result = new Function('return'+string) ();
//                  input.value=result;
//                  string=result.toString();
//             }
//             catch (error){
//                 input.value ='Error'
//                 string='';
//             }
//         } else {
//         string += e.target.innerHTML;
//         input.value=string; }
//         });
//     });
// alert("hello me");