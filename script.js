  const btnNext1=document.getElementById("nextBtn1")
  const form = document.getElementById("studentForm1")
  btnNext1.addEventListener("click", ()=>{
   // PERSONAL DETAILS
      let fname = form.elements.fname.value
      localStorage.setItem("fname",fname)
    
      let mname = form.elements.mname.value
      localStorage.setItem("mname",mname)

      let lname = form.elements.lname.value
      localStorage.setItem("lname",lname)

      let dob = form.elements.dob.value
      localStorage.setItem("dob",dob)

      let email = form.elements.email.value
      localStorage.setItem("email",email)

      let ccode = form.elements.ccode.value
      localStorage.setItem("ccode",ccode)

      let mobn = form.elements.mobn.value
      localStorage.setItem("mobn",mobn)

      let alt = form.elements.alt.value
      localStorage.setItem("alt",alt)

   // ADDRESS DETAILS

      let nat = form.elements.nat.value
      localStorage.setItem("nat",nat)

      let state = form.elements.state.value
      localStorage.setItem("state",state)

      let address = form.elements.address.value
      localStorage.setItem("address",address)

      let land = form.elements.land.value
      localStorage.setItem("land",land)

      let pin = form.elements.pin.value
      localStorage.setItem("pin",pin)

      //FAMILY DETAILS

      let ffname = form.elements.ffname.value
      localStorage.setItem("ffname",ffname)

      let flname = form.elements.flname.value
      localStorage.setItem("flname",flname)

      let focc = form.elements.focc.value
      localStorage.setItem("focc",focc)

      let mfname = form.elements.mfname.value
      localStorage.setItem("mfname",mfname)

      let mlname = form.elements.mlname.value
      localStorage.setItem("mlname",mlname)

      let mocc = form.elements.mocc.value
      localStorage.setItem("mocc",mocc)

      let cocode = form.elements.cocode.value
      localStorage.setItem("cocode",cocode)

      let phone = form.elements.phone.value
      localStorage.setItem("phone",phone)

      let altmob = form.elements.altmob.value
      localStorage.setItem("altmob",altmob)

      // IDENTITY DETAILS

      let id = form.elements.id.value
      localStorage.setItem("id",id)

      let cid = form.elements.cid.value
      localStorage.setItem("cid",cid)

      let auth = form.elements.auth.value
      localStorage.setItem("auth",auth)

      let issdate = form.elements.issdate.value
      localStorage.setItem("issdate",issdate)

      let expdate = form.elements.expdate.value
      localStorage.setItem("expdate",expdate)

      
    

      window.location.href="index2.html"
 })



// Stringify the object before storing it in the local storage with the key 'student'
localStorage.setItem('studentForm1', JSON.stringify(studentForm1));
