import {Component} from '@angular/core';
import {I18nService} from "../i18n.service";

@Component({
    selector: 'app-language-switcher',
    templateUrl: './toggler.component.html',
    styleUrls: [ './toggler.component.scss' ]
})
export class TogglerComponent {

    constructor ( private i18nService: I18nService ) {
    }

    private switchLanguage ( language: string ) {
        this.i18nService.switchLanguage(language);
    }

    private getAvailableLanguages (): string[] {
        return this.i18nService.getSupportedLanguages();
    }

    private getLanguage (): string {
        return this.i18nService.getLanguage();
    }

}
