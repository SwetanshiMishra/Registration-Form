const submit=document.getElementById("submit")
const form = document.getElementById("studentForm3")
submit.addEventListener("click", ()=>{
 // UPLOAD DOCUMENTS
    let pass = form.elements.pass.value
    localStorage.setItem("pass",pass)

    let uid = form.elements.uid.value
    localStorage.setItem("uid",uid)

    let usign = form.elements.usign.value
    localStorage.setItem("usign",usign)

    let hmark = form.elements.hmark.value
    localStorage.setItem("hmark",hmark)
  
    let smark = form.elements.smark.value
    localStorage.setItem("smark",smark)

    let dmark = form.elements.dmark.value
    localStorage.setItem("dmark",dmark)

    
})


// Stringify the object before storing it in the local storage with the key 'student'
localStorage.setItem('studentForm3', JSON.stringify(studentForm3));
