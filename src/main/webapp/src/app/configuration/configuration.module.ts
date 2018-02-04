import {NgModule} from "@angular/core";
import {SharedModule} from "../core/shared/shared.module";
import {ConfigurationRoutingModule} from "./configuration.routing";
import {ConfigurationComponent} from "./configuration.component";
import {CompanyConfigComponent} from "./company/company.component";
import {OrganizationConfigComponent} from "./organization/organization.component";
import {OrganizationConfigService} from "./organization/organization.service";

@NgModule({
    imports: [
        SharedModule,
        ConfigurationRoutingModule
    ],
    declarations: [
        ConfigurationComponent,
        CompanyConfigComponent,
        OrganizationConfigComponent
    ],
    exports: [
        ConfigurationComponent,
        CompanyConfigComponent,
        OrganizationConfigComponent
    ],
    providers: [
        OrganizationConfigService
    ]
})
export class ConfigurationModule {
}
