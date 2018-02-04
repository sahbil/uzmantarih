import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MenuBarService {
    private sideNavToggleSource: Subject<any> = new Subject<any>();
    public sideNavToggleCalled = this.sideNavToggleSource.asObservable();

    constructor () {
    }

    /**
     * Method to toggle side nav pane in the menu bar component
     */
    public toggleMenu (): void {
        this.sideNavToggleSource.next();
    }
}
