import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LayoutFooterRoutes} from "./footer";
import {LayoutHeaderRoutes} from "./header";
import {LayoutSidenavRoutes} from "./menu-bar";

@NgModule({
    imports: [
        RouterModule.forChild([
            ...LayoutFooterRoutes,
            ...LayoutHeaderRoutes,
            ...LayoutSidenavRoutes
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UiRoutingModule {
}
