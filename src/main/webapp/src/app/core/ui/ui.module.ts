import {NgModule} from "@angular/core";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SharedModule} from "../shared/shared.module";
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HeaderModule} from "./header/header.module";
import {KPYSFooterModule} from "./footer/footer.module";
import {SidenavModule} from "./menu-bar/sidenav.module";
import {UiRoutingModule} from "./ui-routing.module";

@NgModule({
    imports: [
        SharedModule,
        HeaderModule,
        KPYSFooterModule,
        SidenavModule,
        UiRoutingModule
    ],
    declarations: [
        ToolbarComponent,
        MenuBarComponent,
        FooterComponent,
        HeaderComponent,
    ],
    exports: [
        ToolbarComponent,
        MenuBarComponent,
    ],
})
export class UiModule {

}
