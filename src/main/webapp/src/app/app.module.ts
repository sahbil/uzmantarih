import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoggerModule, NGXLogger, NgxLoggerLevel} from "ngx-logger";
import {AppEnvironment} from "./core/environment/app-environment";
import {UiModule} from "./core/ui/ui.module";
import {SharedModule} from "./core/shared/shared.module";
import 'hammerjs';
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader, I18nModule, languageLoader} from "./core/i18n/i18n.module";
import {I18nService} from "./core/i18n/i18n.service";
import {OrganizationComponent} from "./dashboard/organization/organization.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ConfigurationModule} from "./configuration/configuration.module";
import {KPYSRoutingModule} from "./core/routing/routing.module";

@NgModule({
    declarations: [
        AppComponent,
        OrganizationComponent,
        DashboardComponent
    ],
    imports: [
        LoggerModule.forRoot({
            serverLoggingUrl: '/api/logs',
            level: NgxLoggerLevel.DEBUG,
            serverLogLevel: NgxLoggerLevel.ERROR
        }),
        KPYSRoutingModule,
        SharedModule,
        ConfigurationModule,
        UiModule,
        I18nModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [ HttpClient ]
            },
            isolate: true
        }),
    ],
    providers: [
        AppEnvironment,
        NGXLogger,
        {
            provide: LOCALE_ID,
            useFactory: languageLoader,
            deps: [ I18nService ]
        },
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
