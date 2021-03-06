import { Component, OnInit } from '@angular/core';

import { ProgressService } from 'factor-common';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  value: number = 0;
  codeSize = '<ft-progress size="3"></ft-progress>';
  codeColor = `<ft-progress size="2" color="#FF0000"></ft-progress>
<ft-progress size="2" color="var(--blue)"></ft-progress>
<ft-progress size="2" color="rgb(0,255,0)"></ft-progress>
<ft-progress size="2" color="rgba(0,0,0,.5)"></ft-progress>`;
  codeMode = `<ft-progress size="3" mode="determinate" [value]="value"></ft-progress>
<!-- Por defecto el modo es indeterminate -->
<ft-progress size="3"></ft-progress>`;
  codeService = `
    this.progressService.show();
    this.progressService.hide();
  `;
  interval;

  constructor(
    public progressService: ProgressService
  ) { }

  ngOnInit(): void {
    this.startProgress();
  }
  startProgress() {
    clearInterval(this.interval);
    this.value = 0;
    this.interval = setInterval(() => {
      this.value += 2;
      if (this.value>=100) {
        clearInterval(this.interval);
      }
    }, 100);
  }

}
