import { Component, OnInit } from '@angular/core';
import {AppEnvironment} from "../core/environment/app-environment";

@Component({
  selector: 'app-uzmantarih',
  templateUrl: './uzmantarih.component.html',
  styleUrls: ['./uzmantarih.component.scss']
})
export class UzmantarihComponent implements OnInit {

  constructor(private app: AppEnvironment) { }

  ngOnInit() {
      this.app.getLogger().debug('UzmantarihComponent');
  }

}
