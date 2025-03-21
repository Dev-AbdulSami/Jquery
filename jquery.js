// $(".tabs-header a").click(function(){

//     $(".tabs-content").removeClass("active").hide()

//     $(this).addClass("active")
  
//     var target = $(this).attr("href")
   
//     $(target).addClass("active").show()
    
// })

// $("#searchBox").on("keyup",function(){

//     let query = $(this).val().toLowerCase()
//     $("#itemList li").filter(function(){
//         let text = $(this).text().toLowerCase()
//         let isMatch = text.includes(query)
//         $(this).toggle(isMatch)   
//     })
// })


$.validator.addMethod("alphabetsnspace",function(value){

    return /^[a-zA-Z ]*$/.test(value)
})

$("#myForm").validate({

    rules:{

        name:{
            required: true,
            minlength: 3,
            alphabetsnspace: true
        },

        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6
        }
    },

    messages:{

        name:{
            required: "Please enter your name",
            minlength: "Minimum 3 alphabets",
            alphabetsnspace: "Please Enter Only Letters"
        },

        email:{
             required: "Please enter your email",
             email: "Invalid email"
        },
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
        }

    },

    submitHandler: function(form){
        $("#message").text("Form submitted")
        form.submit()
    }
})