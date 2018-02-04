import {Organization} from "./organization";

export class Company {
    constructor ( public primaryKey: number,
                  public name: string,
                  public description: string,
                  public organization: Organization,
                  public kml?: string ) {
    }
}
