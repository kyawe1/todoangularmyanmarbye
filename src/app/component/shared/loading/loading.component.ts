import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  @Input()
  public loading:boolean=false;
}
