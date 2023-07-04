let mainicon = document.querySelector('.mainicon')
let frame = document.querySelector('.frame')
let firstbox = document.querySelector('.firstbox')
// let area2 = document.querySelector('.area2')
let j=1
let i = 0;
const arr = []
arr[0]=0
const arr1 = []
// arr1[0]=0
let k = ''
// var element = `${frame.innerHTML}`
var element
var string = ''
let l =0
// const arr = []
// arr2

mainicon.addEventListener('click',()=>{
   if(j!=100)
   {
   //  element = '<div class="text"><textarea name="" id="fram" cols="30" rows="10"></textarea></div>'
   //  element = '<div class="text"></textarea></div>'
   // element = '<div class="text"><div class="area"></div><textarea name="" id="fram" cols="30" rows="10"></textarea></div>'
   // element = `<div class="text"><div class="area"><div class="area1"><i class="fas fa-edit"></i></div><div class="area2"><i class="fa-solid fa-trash" id = 'camel${arr1[l]+1}' ></i></div></div><textarea name="" id="fram" cols="30" rows="10"></textarea></div>`
   // element = `<div class="text"><div class="area"><div class="area1"><i class="fas fa-edit"></i></div><div class="area2"><i class="fa-solid fa-trash" id = 'camel${arr1[l]+1}' ></i></div></div><textarea name="" id="fram" cols="30" rows="10"></textarea></div>`
   k='';
   for(i = 0; i<j;++i)
   {  arr1[i] = i
      // console.log(arr1[i])
      element = `<div class="text"   id = 'camel${arr1[i]}'><div class="area"><div class="area1"><i class="fas fa-edit"></i></div><div class="area2" id = 'camel${arr1[i]}'><i class="fa-solid fa-trash" id = 'camel${arr1[i]}' ></i></div></div><textarea name="" id='pamel${arr1[i]}' cols="30" rows="10"></textarea></div>`
      arr[i]= element
      // console.log(arr[i])
     k= `${k}${arr[i]}`
   //   console.log(i);
   }
  
    string = `${k}`
    frame.innerHTML= string
   //  document.querySelector(`#camel${i}`).style.resize = 'none'
    ++j;
   //  l++
   //  arr1 [l]= l
   //  console.log(j)
   
   }   
  
   
})
window.onclick=((event)=>{
   for(let r = 0 ; r<100;++r)
   { if(event.target.id===`camel${r}`)
   {
      //   console.log("arabianthullu")
      //   document.querySelector(``)
          
      //  console.log(r)
      // console.log(arr[r])
      setTimeout(() => {
         document.querySelector(`#camel${r}`).style.opacity = '50%'
      }, 600);
      setTimeout(() => {
         document.querySelector(`#camel${r}`).style.opacity = '20%'
      }, 900);
      setTimeout(() => {
         document.querySelector(`#camel${r}`).style.display = 'none'
      }, 1100);
      
      // document.querySelector(`#camel${r}`).style.opacity = '50%'
      // document.querySelector(`#camel${r}`).style.opacity = '20%'
      //  document.querySelector(`#camel${r}`).style.display = 'none'
       --j;
      //  console.log(document.querySelector(`#pamel${r}`).value)

   }
}
})
//   if((event.target.className==="fa-solid fa-trash")||(event.target.className==="area2"))
//   {
//    j=j-2;
//    l=l-2
//    k='';
//  for( i = 0;i<j;++i)
//  { 

//    //  arr[i] = element;
//    k= `${k}${arr[i]}`

//  }

//   string = `${k}`
//   frame.innerHTML= string
//   ++j
//   ++l
//   console.log(j)
//   }
// console.log(event.target.id)
// document.querySelector(`.camel${}`).style.display = 'none'

//   }

   //  })
   // console.log(document.querySelector(`camel${0}`).value)
//////////////////////////////////////////////////////////
// window.onclick=((event)=>{
//    for(let r = 0 ; r<100;++r)
//    { if(event.target.id===`damel${r}`)
//    {
     
//       arr2[r]= document.querySelector(`#pamel${r}`).value
//       console.log(arr2[r])


//    }
// }
// })








//   if((event.target.className==="fa-solid fa-trash")||(event.target.className==="area2"))
//   {
//    j=j-2;
//    l=l-2
//    k='';
//  for( i = 0;i<j;++i)
//  { 

//    //  arr[i] = element;
//    k= `${k}${arr[i]}`

//  }

//   string = `${k}`
//   frame.innerHTML= string
//   ++j
//   ++l
//   console.log(j)
//   }
// console.log(event.target.id)
// document.querySelector(`.camel${}`).style.display = 'none'

  

   //  })
   // console.log(document.querySelector(`camel${0}`).value)