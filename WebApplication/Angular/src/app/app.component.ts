import { Component } from '@angular/core';
import { ConfigService } from 'src/service/config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  result : any;
  constructor(private configService : ConfigService)
  {

  }

  ngOnInit()
  {
    this.configService.getResult()
    .subscribe(result => (this.result = result));
  }

}
