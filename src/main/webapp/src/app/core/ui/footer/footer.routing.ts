import {FooterComponent} from "./footer.component";
import {Routes} from "@angular/router";

export const LayoutFooterRoutes: Routes = [
    {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
    },
];
