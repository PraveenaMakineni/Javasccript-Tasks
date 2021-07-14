/* Form Handlings  */

var form_validations = () => {

    //Target_Inputs
    var unameDOM = document.getElementById('uname')
    var emailDOM = document.getElementById('email')
    var pwdDOM = document.getElementById('pwd')
    var tst1 = document.getElementById('txt')
    var select1 = document.getElementById('choose1')
      
   /*******radio button ********/
   var ychecked = document.getElementById('ry').checked;
   var nchecked = document.getElementById('rn').checked;

   var ychecked1 = document.getElementById('ryerr');
   /*******radio button ********/
         
   /*******checkbox button ********/
   var jchecked = document.getElementById('js').checked;
   var rchecked = document.getElementById('reactjs').checked;
   var ndchecked = document.getElementById('nodejs').checked;
   var achecked = document.getElementById('angularjs').checked;
  
   var spanerr = document.getElementById('err');
   /*******checkbox button ********/

    /******* file uploading ********/
    var fileDOM = document.getElementById('filep');
    var ferr = document.getElementById('file_err');
    /******** file uploading ********/


                        
  //Err_DOM
    var unameErr = document.getElementById('uname_err')
    var emailErr = document.getElementById('email_err')
    var pwdErr = document.getElementById('pwd_err')
    var nutter = document.getElementById('texterr')
    var selecterr = document.getElementById('cherr')

   //Icons
    var wrong = `<i class="fas fa-power-off"></i>`

    var status=true;

    

    //Conditions..
    if (uname.value == undefined || uname.value == "") {
        unameErr.innerHTML = `${wrong} Enter Your name`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status=false
    }
    else if (!uname.value.match(/^[a-z]+$/)) {
        unameErr.innerHTML = `${wrong} Name must be Alphabets [a-z]...`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status=false
    }
    else {
        document.getElementById('uname_err').innerText = ""
        unameDOM.style.border = "1px solid #e5e5e5"
    }


    if (email.value == undefined || email.value == "") {
        emailErr.innerHTML = `${wrong} Enter Your Email`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status=false
    }
    else if (!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)) {
        emailErr.innerHTML = `${wrong} Enter Valid Email name@domain.ext`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status=false
    }
    else {
        emailErr.innerText = ""
        emailDOM.style.border = "1px solid #e5e5e5"
    }



    if (pwd.value == undefined || pwd.value == "") {
        pwdErr.innerHTML = `${wrong} Enter Your Password`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status=false
    }
    else if (!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        pwdErr.innerHTML = `${wrong} Pwd must be 1-uppercase, Lowercase, Number, SpecialCharacter`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status=false
    }
    else {
        pwdErr.innerText = ""
        pwdDOM.style.border = "1px solid #e5e5e5"
    }

    if (txt.value == undefined || txt.value == "") {
        texterr.innerHTML = `${wrong} Enter Your Address`
        texterr.style.color = "red"
        tst1.style.border = "1px solid red"
        status=false
    }
    else if (!txt.value.match(/^[a-z]+$/)) {
        texterr.innerHTML = `${wrong} Address must be in Lowercase`
        texterr.style.color = "red"
        tst1.style.border = "1px solid red"
        return false
    }
    else {
        textErr.innerText = ""
        txtDOM.style.border = "1px solid #e5e5e5"
    }


    if(select1.value==""){
        selecterr.innerHTML= "Enter an option"
        selecterr.style.color="red"
        select1.style.border="1px solid red"
        status=false
    }
    else{
        select1.style.border="1px solid #e5e5e5"
    }
    if(ychecked==false && nchecked==false){
        ychecked1.innerHTML="Please check any option"
        ychecked1.style.color= "red"
        ychecked1.style.border="1px solid #e5e5e5"
        status=false
    }

    if(jchecked==false && rchecked==false && ndchecked==false && achecked==false){
        spanerr.innerHTML="Please check your options"
        spanerr.style.color= "red"
        status=false
    }
    
    if (fileDOM.value == ""){
        //alert("please choose a file")
        ferr.innerHTML = "choose a file"
        ferr.style.color = "red"
        status=false
    }
    else if(!fileDOM.value.toLowerCase().match(/(\.jpeg|\.png|\.jpg|\.gif)/)){
       //alert("pls select an image file")
        ferr.innerHTML = "select an image file"
        ferr.style.color = "red"
        status=false
    }
     else if(fileDOM.files[0].size > 1024*1024*1){
         //alert("file is accepted")
         ferr.innerHTML = "file must be less than 1MB "
         ferr.style.color = "red"
         status=false
        }
     else {
        // alert("pls choose a file less than 2mb")
         ferr.innerHTML = "crct file is taken"
     }
    return status

   }   
    