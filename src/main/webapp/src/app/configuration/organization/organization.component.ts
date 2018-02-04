import {Component, OnInit} from '@angular/core';
import {AppEnvironment} from "../../core/environment/app-environment";
import {OrganizationConfigService} from "./organization.service";

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    styleUrls: [ './organization.component.scss' ]
})
export class OrganizationConfigComponent implements OnInit {

    constructor ( private app: AppEnvironment, private organizationService: OrganizationConfigService ) {
    }

    ngOnInit () {
        this.app.getLogger().debug('OrganizationConfigComponent init');
        this.organizationService.getAllOrganization().then(data => this.app.getLogger().debug(data));
    }

}
