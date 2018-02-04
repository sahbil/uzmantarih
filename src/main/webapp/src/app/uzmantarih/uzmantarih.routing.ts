import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UzmantarihComponent} from "./uzmantarih.component";
import {AppRoutes} from "../core/routing";

@NgModule({
    imports: [
        RouterModule.forChild([ {
            path: AppRoutes.ROUTING_HOME, component: UzmantarihComponent
        } ])
    ],
    exports: [
        RouterModule
    ]
})
export class UzmantarihRouting {
}
