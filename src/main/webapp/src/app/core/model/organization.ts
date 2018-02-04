import {Company} from "./company";

export class Organization {
    constructor ( public primaryKey: number,
                  public name: string,
                  public description: string,
                  public kml?: string,
                  public companies?: Company[] ) {
    }
}
