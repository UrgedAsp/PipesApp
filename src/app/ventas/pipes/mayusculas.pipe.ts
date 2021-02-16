import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(valor: string, EnMayusculas: boolean = true): string {
        return (EnMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }

}