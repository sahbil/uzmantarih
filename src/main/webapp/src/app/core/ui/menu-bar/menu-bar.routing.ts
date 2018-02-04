import {Routes} from "@angular/router";
import {MenuBarComponent} from "./menu-bar.component";

export const LayoutSidenavRoutes: Routes = [
    {
        path: '',
        component: MenuBarComponent,
        outlet: 'sidenav'
    },
];
