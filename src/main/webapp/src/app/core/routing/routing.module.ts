import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppRoutes} from "./routing";
import {OrganizationComponent} from "../../dashboard/organization/organization.component";
import {DashboardComponent} from "../../dashboard/dashboard.component";
import {AppComponent} from "../../app.component";

const appRoutes: Routes = [
    // {
    //     path: AppRoutes.ROUTING_HOME, component: AppComponent, children: [
    //         // Dashboard
    //         {
    //             path: AppRoutes.ROUTING_DASHBOARD, component: DashboardComponent,
    //             children: [
    //                 {path: AppRoutes.ROUTING_ORGANIZATION, component: OrganizationComponent}
    //             ]
    //         }
    //     ]
    // },
    // otherwise redirect to home
    // {path: '**', redirectTo: AppRoutes.ROUTING_HOME}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class KPYSRoutingModule {
}
