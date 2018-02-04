import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ConfigurationComponent} from "./configuration.component";
import {OrganizationConfigComponent} from "./organization/organization.component";
import {AppRoutes} from "../core/routing";

@NgModule({
    imports: [ RouterModule.forChild([
        {
            path: AppRoutes.ROUTING_CONFIGURATION,
            component: ConfigurationComponent,
            children: [
                {path: AppRoutes.ROUTING_ORGANIZATION, component: OrganizationConfigComponent}
            ]
        }
    ]) ],
    exports: [ RouterModule ]
})
export class ConfigurationRoutingModule {
}
