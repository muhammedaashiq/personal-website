$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            name:{
                required:true,
                minlength:6,
                maxlenght:10,
            },
            email:{
                required:true,
                email:true,
            },
            subject:{
                required:true,
            },
            message:{
                required:true,
            }
        },
        messages:{
            name:{
                required:"Enter your name",
                minlenght:"Enter atleast 6 characters"
            }
        }
    })
})