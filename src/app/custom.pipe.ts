import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customPipes' })
export class CustomPipes implements PipeTransform {
    transform(value: number, exportnent: string): number {
        let exp = parseFloat(exportnent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}