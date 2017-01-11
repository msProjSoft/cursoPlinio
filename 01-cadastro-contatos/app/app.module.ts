/*
Modulo root, modulo principal
*/

import {NgModule} from "@angular/core"; 
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

//---- Decorar a classe necessario para angular2
//Modulos minimos para a app funcionar
@NgModule({
    imports: [BrowserModule], 
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
