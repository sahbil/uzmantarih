import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {AppEnvironment} from "../core/environment/app-environment";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: [ './admin.component.scss' ]
})
export class AdminComponent implements OnInit, OnDestroy {
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
