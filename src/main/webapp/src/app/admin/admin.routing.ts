import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AppRoutes} from "../core/routing";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: AppRoutes.ROUTING_ADMIN, component: AdminComponent
        }])
    ],
    exports: [ RouterModule ]
})
export class AdminRouting {
}
