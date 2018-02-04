import {Injectable} from "@angular/core";
import {AppEnvironment} from "../../core/environment/app-environment";
import {HttpClient} from "@angular/common/http";
import {Organization} from "../../core/model/organization";
import {ApiUrls} from "../../core/shared/api-urls";

@Injectable()
export class OrganizationConfigService {
    constructor ( private app: AppEnvironment,
                  private http: HttpClient ) {
    }

    getAllOrganization (): Promise<Organization[]> {
        return this.http.get<Organization[]>(ApiUrls.ORGANIZATION_URL).toPromise();
    }
}
