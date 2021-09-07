import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ad-bar',
  templateUrl: './ad-bar.component.html',
  styleUrls: ['./ad-bar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdBarComponent implements OnInit {

  @Input()
  adTopic!: string;

  constructor() { }

  ngOnInit(): void {
  }

  whenRendering(): Date {
    console.warn('Rendering Ad Bar component')
    return new Date();
  }

}
