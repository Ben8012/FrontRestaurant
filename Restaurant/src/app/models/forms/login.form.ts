import { FormControl, FormGroup, Validators } from "@angular/forms"

export const FormLogin = function (){
    return new FormGroup({
        email : new FormControl("mat@example.com",[Validators.required]),
        password : new FormControl("Test1234=",[Validators.required]),
    })
   
}