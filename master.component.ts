import {Component} from "@angular/core";
@Component({
	selector:"master",
	templateUrl:"master.component.html"
})
export class MasterComponent{
	i:number=100;

	a:number=900;
	
	m1(data:number){
		this.i=data;
	}

	
}