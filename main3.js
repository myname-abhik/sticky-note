let i =0
let j = 'return'
let p = 0
const mainicon = document.querySelector('.mainicon')
const updateLSDdata = ()=>{
    const textareadata = document.querySelectorAll('textarea')
    const notes = []
    textareadata.forEach((note)=>{
        return notes.push(note.value)
    })
    localStorage.setItem('notes', JSON.stringify(notes))
}
// const updateLSDdata1 = ()=>{
//     const textareadata = document.querySelectorAll('textarea')
//     const notes = []
//     textareadata.forEach((note)=>{
//         return notes.pop(note.value)
//     })
//     for(let i = 0 ; i<notes.length;i++)
//     {
//         console.log(notes[i])
//     }
// }

const func = (text = '')=>{

    const note = document.createElement('div')
    note.classList.add('text');
    // const edittext = note.querySelector('.area1')
    const htmlData = `<div class="area"><div class="area1" ><i class="far fa-save"></i></div><div class="area2" ><i class="fa-solid fa-trash"  ></i></div></div><div class="mainclass ${text ? "hidden1" : "hidden"}" ></div><textarea  class ="${text ? "hidden" : " "}"></textarea>`
    note.insertAdjacentHTML('afterbegin',htmlData)
    console.log(note)
    document.querySelector('.frame').appendChild(note);
    if(j=='true')
    {
    const tex1 = document.querySelectorAll('textarea')
    for(i = 0 ; i<tex1.length;++i)
    {
    tex1[i].style.background = '#FF8989'
    tex1[i].style.color = '#FFEADD'
    }
}
else if (j=='false')
{
    const tex8 = document.querySelectorAll('textarea')
    for(i = 0 ; i<tex8.length;++i)
    {
    tex8[i].style.background = '#0E8388'
    tex8[i].style.color = 'white'
    }

}
else if (j=='return')
{
    const tex1 = document.querySelectorAll('textarea')
    for(i = 0 ; i<tex1.length;++i)
    {
    tex1[i].style.background = '#F6E1C3'
    tex1[i].style.color = 'black'
    }
}
    const delbutton = note.querySelector('.area2')
    const edittext = note.querySelector('.area1')
    const textarea = note.querySelector('textarea')
    const mainclass = note.querySelector('.mainclass')
    delbutton.addEventListener('click',()=>{
        note.remove()
        updateLSDdata()


    })
    textarea.value = text
    mainclass.innerHTML = text
    edittext.addEventListener('click',()=>{
        mainclass.innerHTML = `${textarea.value}`
        // console.log(mainclass.innerHTML)
        mainclass.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        // textarea.style.background = "red"
        updateLSDdata()


    })



}
const notes = JSON.parse(localStorage.getItem('notes'))
if(notes){notes.forEach((note)=>func(note))}

mainicon.addEventListener('click',()=> func())


const button = document.querySelector('.button')

button.addEventListener('click',()=>{
    if(p==0)
    {

    
    document.querySelector('.container').style.background = '#FCAEAE'
    document.querySelector('.nav').style.background = '#FF8989'
    const tex = document.querySelectorAll('textarea')
    // const are1 = document.querySelectorAll('are1')
    button.style.background = '#FCAEAE'
    document.querySelector('.mainicon').style.background = '#FCAEAE'
    for(i = 0 ; i<tex.length;++i)
    {
    tex[i].style.background = '#FF8989'
    tex[i].style.color = '#FFEADD'
    }
    j = 'true'
    p=1
    console.log(p)

}
else if (p==1)
{
    document.querySelector('.container').style.background = '#2E4F4F'
    document.querySelector('.nav').style.background = '#0E8388'
    const tex = document.querySelectorAll('textarea')
    document.querySelector('.mainicon').style.background = 'white'
    // const are1 = document.querySelectorAll('are1')
    // button.style.color = "white"
    button.style.background = '#F6F1F1'
    for(i = 0 ; i<tex.length;++i)
    {
    tex[i].style.background = '#0E8388'
    tex[i].style.color = 'white'
    }
    // j = 'true'
    p=2
    j= 'false'
    // t= 'true'
    console.log(p)
}
else if (p==2)
{
    document.querySelector('.container').style.background = 'white'
    document.querySelector('.nav').style.background = '#F7BC07'
    const tex = document.querySelectorAll('textarea')
    document.querySelector('.mainicon').style.background = 'white'
    // const are1 = document.querySelectorAll('are1')
    // button.style.color = "white"
    button.style.background = 'white'
    for(i = 0 ; i<tex.length;++i)
    {
    tex[i].style.background = '#F6E1C3'
    tex[i].style.color = 'black'
    }
    // j = 'true'
    p=0
    j= 'return'
    console.log(p)
}



})