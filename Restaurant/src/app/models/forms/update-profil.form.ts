import { FormControl, FormGroup, Validators } from "@angular/forms"


export const FormUpdateProfil = function (){
    return new FormGroup({
        firstname : new FormControl("",[Validators.required]),
        lastname : new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
        email : new FormControl("",[Validators.required]),
        street : new FormControl("",[Validators.required]),
        number : new FormControl("",[Validators.required]),
        postCode : new FormControl("",[Validators.required]),
        city : new FormControl("",[Validators.required]),
    
       
    })
}