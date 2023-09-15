import { FormControl, FormGroup, Validators } from "@angular/forms"
import { checkPasswords } from "src/app/services/customValidators/passwordConfirm.validator"
import { passwordValidator } from "src/app/services/customValidators/passwordPattern.validator"

export const FormRegister = function (){
    return new FormGroup({
        firstname : new FormControl("gael",[Validators.required]),
        lastname : new FormControl("gael",[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
        email : new FormControl("gael@mail.com",[Validators.required]),
        password : new FormControl("Test1234=",[Validators.required, passwordValidator()]),
        passwdConfirm : new FormControl("Test1234=",[Validators.required, passwordValidator()]),
    },
    [checkPasswords('passwd', 'passwdConfirm')]
    )
}