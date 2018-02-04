import {EventEmitter, Injectable, Input, Output} from "@angular/core";

@Injectable()
export class PageTitleService {
    @Input()
    public pageTitle: string;

    @Output() updateTitle: EventEmitter<string> = new EventEmitter<string>();

    public setPageTitle ( newPageTitle: string ): void {
        this.pageTitle = newPageTitle;
        this.updateTitle.emit(this.pageTitle);
    }
}
