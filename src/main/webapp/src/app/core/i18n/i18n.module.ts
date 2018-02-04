import {NgModule} from '@angular/core';
import {TogglerComponent} from './toggler/toggler.component';
import {TranslateModule} from "@ngx-translate/core";
import {I18nService} from "./i18n.service";
import {SharedModule} from "../shared/shared.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";

@NgModule({
    imports: [
        TranslateModule,
        SharedModule
    ],
    exports: [ TranslateModule, TogglerComponent ],
    declarations: [ TogglerComponent ],
    providers: [ I18nService ]
})
export class I18nModule {
}


export function createTranslateLoader ( http: HttpClient ) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function languageLoader ( i18nService: I18nService ) {
    return i18nService.getLanguage();
}
