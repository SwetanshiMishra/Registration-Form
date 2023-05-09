const btnNext2=document.getElementById("nextBtn2")
const form = document.getElementById("studentForm2")
btnNext2.addEventListener("click", ()=>{
 // EDUCATIONAL QUALIFICATION
    let hsc = form.elements.hsc.value
    localStorage.setItem("hsc",hsc)

    let hscp = form.elements.hscp.value
    localStorage.setItem("hscp",hscp)
  
    let ssc = form.elements.ssc.value
    localStorage.setItem("ssc",ssc)

    let sscp = form.elements.sscp.value
    localStorage.setItem("sscp",sscp)

    let deg = form.elements.deg.value
    localStorage.setItem("deg",deg)

    let degp = form.elements.degp.value
    localStorage.setItem("degp",degp)

    window.location.href="index3.html"
})



// Stringify the object before storing it in the local storage with the key 'student'
localStorage.setItem('studentForm2', JSON.stringify(studentForm2));
