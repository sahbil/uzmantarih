import {NgModule} from '@angular/core';
import {SharedModule} from "../core/shared/shared.module";
import {UzmantarihComponent} from "./uzmantarih.component";
import {UzmantarihRouting} from "./uzmantarih.routing";

@NgModule({
    imports: [
        SharedModule,
        UzmantarihRouting
    ],
    declarations: [
        UzmantarihComponent
    ],
    exports: [
        UzmantarihComponent
    ]
})
export class UzmantarihModule {
}
