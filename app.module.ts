import { MasterComponent } from './master.component';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import { DetailComponent } from './detail.component';

@NgModule({
	imports:[BrowserModule],
	declarations:[AppComponent,MasterComponent,DetailComponent],
	bootstrap:[AppComponent]
})
export class AppModule{
	
}

