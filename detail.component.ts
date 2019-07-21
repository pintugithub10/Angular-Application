import {Component, Input, Output,EventEmitter} from "@angular/core";
@Component({
	selector:"detail",
	templateUrl:"detail.component.html"
})
export class DetailComponent{

    @Input()
    b:number=10;

   @Input()
    j:number;

    
   @Output()
    em:EventEmitter<number>=new EventEmitter<number>();

  
}