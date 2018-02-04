import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs/Observable";
import {NGXLogger} from "ngx-logger";

@Injectable()
export class I18nService {
    private static DEFAULT_LANGUAGE: string = 'tr';
    private static AVAILABLE_LANGUAGES: string[] = [ 'tr', 'nl' ];

    constructor ( private translate: TranslateService, private logger: NGXLogger ) {
        this.init();
    }

    public init (): void {
        this.translate.addLangs(I18nService.AVAILABLE_LANGUAGES);
        this.setLanguage(I18nService.DEFAULT_LANGUAGE);
    }

    private setLanguage ( lang: string ) {
        this.translate.setDefaultLang(lang);
        this.translate.use(lang).subscribe(() => {
            this.logger.debug(`Successfully initialize ${lang} language.`);
        }, err => {
            this.logger.error(`Problem with '${lang}' language initialization.'`);
        });
    }

    public getSupportedLanguages (): string[] {
        return this.translate.getLangs();
    }

    public switchLanguage ( newLanguage: string ): void {
        this.setLanguage(newLanguage);
    }

    public isCurrentLanguage ( language: string ): boolean {
        return this.translate.getDefaultLang() === language;
    }

    public translateKeySync ( key: string ): Observable<string> {
        return this.translate.get(key);
    }

    public translateKey ( key: string ): string {
        const translation: string = this.translate.instant(key);
        if ( translation === key ) {
            this.logger.error('No translation found for key', key);
        }
        return translation;
    }

    public translateEnum ( key: string ): string {
        return this.translateKey('Enum' + key);
    }

    public getLanguage (): string {
        /*
         * For now the locale is automatically determined based on the client browser language.
         * The user texts can be alter manually
         */
        return this.translate.getDefaultLang();
    }

    // only visible for testing
    protected getBrowserLanguage (): string {
        return this.translate.getBrowserLang();
    }

}
