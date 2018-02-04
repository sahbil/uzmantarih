import {NgModule} from '@angular/core';
import {AdminRouting} from "./admin.routing";
import {AdminComponent} from "./admin.component";
import {UiModule} from "../core/ui/ui.module";
import {SharedModule} from "../core/shared/shared.module";

@NgModule({
    imports: [
        AdminRouting,
        SharedModule,
        UiModule
    ],
    declarations: [
        AdminComponent
    ],
    exports: [
        AdminComponent
    ]
})
export class AdminModule {
}
