
const pix=document.querySelectorAll(".pixel");
pix.forEach((i)=>{
    i.addEventListener('click',()=>{
        i.classList.toggle('active');
    
    })
})

if(i.classList.contains('active')){
    i.style.backgroundColor='black'
};