import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {MatSidenav} from "@angular/material";
import {AppEnvironment} from "./core/environment/app-environment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('sideMenu') sideMenu: MatSidenav;
    menuSubscription: Subscription;

    constructor ( private app: AppEnvironment ) {
    }

    ngOnInit () {
        this.menuSubscription = this.app.getMenuBarService().sideNavToggleCalled
            .subscribe(() => {
                this.sideMenu.toggle().then(() => {
                });
            })
    }

    ngOnDestroy (): void {
        this.menuSubscription.unsubscribe();
    }
}
