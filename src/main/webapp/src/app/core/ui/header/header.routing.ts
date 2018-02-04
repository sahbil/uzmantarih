import {HeaderComponent} from "./header.component";
import {Routes} from "@angular/router";

export const LayoutHeaderRoutes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
    },
];
