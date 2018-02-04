import {Component, OnInit} from '@angular/core';
import {AppEnvironment} from "../../environment/app-environment";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit {

    constructor ( private app: AppEnvironment ) {
    }

    getPageTitle (): string {
        return this.app.getPageTitleService().pageTitle;
    }

    ngOnInit () {
    }

    /**
     * Method to toggle application sidenav.
     */
    toggleMenu (): void {
        this.app.getMenuBarService().toggleMenu();
    }
}
