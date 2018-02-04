import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FooterItemInterface} from "./interfaces/";
import {AppEnvironment} from "../../environment/app-environment";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.scss' ],
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
    public version: string;
    public links: FooterItemInterface[] = [];

    constructor ( private app: AppEnvironment ) {
    }

    ngOnInit (): void {
        this.version = this.app.version;
    }
}
