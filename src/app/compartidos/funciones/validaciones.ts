import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null =>{
        const valor=<string>control.value;

        if(!valor) return null;
        if(valor.length === 0) return null;
        const primeraLetra= valor[0];
        if(primeraLetra !== primeraLetra.toUpperCase()){
            return {
                primeraLetraMayuscula:{
                    mensaje:'La primera letra debe ser mayúscula'
                }
            }
        }

        return null;

    }


}
export function fechaNopudeSerFutura(): ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null =>{
        const fechasEscogidsPorElUsuario=new Date(control.value);
        const hoy= new Date();
        if(fechasEscogidsPorElUsuario> hoy){
            return{
                futuro:{
                    mensaje:'la fecha no puede ser del futuro'
                }
            }
        }
        return null;
    }
}