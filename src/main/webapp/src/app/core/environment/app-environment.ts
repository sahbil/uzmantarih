import {Injectable} from "@angular/core";
import {NGXLogger} from "ngx-logger";
import {MenuBarService} from "../ui/menu-bar/menu-bar.service";
import {PageTitleService} from "../services/page-title.service";

/**
 * This class include the application helper services.
 */
@Injectable()
export class AppEnvironment {
    public version = require('../../../../package.json').version;
    public appName = require('../../../../package.json').name;

    constructor ( private logger: NGXLogger,
                  private menuService: MenuBarService,
                  public pageTitleService: PageTitleService ) {
        this.pageTitleService.setPageTitle(this.appName);
    }

    /**
     * Get service for changing page title
     * @returns {PageTitleService}
     */
    public getPageTitleService (): PageTitleService {
        return this.pageTitleService;
    }

    /**
     * Get application logger
     * @returns {NGXLogger}
     */
    public getLogger (): NGXLogger {
        return this.logger
    }

    /**
     * Get the service for toggle side navigation panel
     * @returns {MenuBarService}
     */
    public getMenuBarService (): MenuBarService {
        return this.menuService;
    }
}
