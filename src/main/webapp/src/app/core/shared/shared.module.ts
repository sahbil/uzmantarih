import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.module";
import {BrowserModule} from "@angular/platform-browser";
import {MatNativeDateModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MenuBarService} from "../ui/menu-bar/menu-bar.service";
import {TranslateModule} from "@ngx-translate/core";
import {PageTitleService} from "../services/page-title.service";

const sharedModules = [
    CommonModule,
    RouterModule,
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TranslateModule
];

@NgModule({
    imports: sharedModules,
    exports: sharedModules,
    providers: [
        MenuBarService,
        PageTitleService
    ]
})
export class SharedModule {

}
