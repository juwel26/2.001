
// let btn = document.getElementById('btn')
// let spn = document.getElementById('pp')


// btn.addEventListener("click", function(){
// let num1 =parseFloat(document.getElementById('n1').value) 
// let num2 =parseFloat(document.getElementById('n2').value)

//  if(num1 ||num2 >= 0){
//   sum = num1 + num2
//  spn.innerHTML =` total = ${sum} ` 
//  spn.style.color = "white"
//  spn.classList.add("p2")
//   return sum
// }else{
//   spn.innerHTML =` plz before submmit must input 2 value > 0`
//   spn.style.color = "red "
//   spn.classList.add("p3")
// }
 
// })

// function refreshPage(){
//   window.location.reload();
// } 





// const numbers = [45, 4, 9, 16, 25];
// let num5 = " "
// let ck = numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//     num5+= value 
// }

// console.log(ck)




// const Vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

// function countVowels(sentence){
//   let count = 0;
//   const letter = Array.from(sentence)

//   letter.forEach(function(value){
//     if(Vowels.includes(value)){
//       count++ ;
//     }
//   })
 
// return count 
  
// }
// console.log(countVowels( " a e i o u"))

// const points = [40, 100,5 , 1, 5, 25, 10, 1,  20];

// const duplicates = points.filter(function(value , index, array){
//      return array.indexOf(value) !== index
// })
// console.log( duplicates)



// let finalName = ''
// function generate(){
//   let finalName= nameList[Math.floor(Math.random()*nameList.length)]
//   document.getElementById("uNameInput").value = finalName;
// }


// const v = [ 'A', 'E', 'I','O' ,'U', 'a','e', 'i', 'o ','u']
// function checkto(sentensc){
//     let text = Array.from(sentensc)
//     text2 = 0
//     text.forEach(function(value){
//        if( v.includes(value)){
//             text2++;
//         }
   
//     })
//  return text2
// }

// console.log(checkto( " a e i o u"))




// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present', 'juwel', ' rakib','sajol'];

// const result = words.filter(function(word){

//    if(word.length == 2){
//         return true
//    }
// });

// console.log(result);
    

// Example usage:

   

// const author = "F. Scott Fitzgerald";

// const results = function getBooksByAthour(author , books){
//       const filterBook = books.filter(function(book){
//          const check = book.includes(author)
//          return check
//       })
//     return filterBook
// }

// console.log(results(author, books ))

const payment = true;
const marks = 80;


function enroll(){
   console.log(' course enrollment is in process.... ')
   const promise = new Promise(function(resolve, reject){
      setTimeout(function(){
         if(payment == true){
            resolve(" payment successfull ...")
         }else{
            reject(" Payment faild ! try again")
         }
      }, 2000)

     
   })

 return promise;
}

function progres(){

   console.log( "course progres on ...")
  
    const promise = new Promise(function(resolve , reject){
      setTimeout(function(){
         if(marks >=80){
            resolve()
         }else{
            reject(" you dont have enough marks to get certificate")
         }
      },3000)
    
    })
  return promise;
    
}
   
function certificate(){

   console.log( "preparing your certificate ...")

    const promise = new Promise(function(resolve){
      setTimeout(function(){
           resolve('congratulations! you got certificate of this course')
    }, 2000)
   
    })
 return promise;
    
}


async function course(){
         try{
            await enroll();
            await progres();
          const message =  await certificate()
          console.log(message)
         }
         catch(error){
               console.log(error)
         }
}

course()



// box Animation

function myanimate(){
  const ani = document.getElementById("animation")
   let  pos = 0 ;
  
  let interval = setInterval(frame ,30);
      
  function frame(){        
      if(pos < 300){
      pos++;
      ani.style.top = pos + "px";
      ani.style.left = pos + "px";
      
      if( pos == 50){
         ani.style.backgroundColor = " red"
      }
      else if ( pos == 100){
         ani.style.backgroundColor = " green"
      }
      else if ( pos == 150){
         ani.style.backgroundColor = " yellow"
      }
      else if ( pos == 200){
         ani.style.backgroundColor = " pink"
      }
      else if ( pos == 250){
         ani.style.backgroundColor = " orange"
      }
   } 
   
   else{
       clearInterval(interval)
   }  
 }
  
}



// myanimate()



