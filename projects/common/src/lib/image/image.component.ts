import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'ft-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @HostBinding('class.ft-image--error')
  error: boolean;
  @HostBinding('class.ft-image--loading')
  loading: boolean;
  @Input()
  src: string;
  shown: boolean;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    if ("IntersectionObserver" in window) {
      let elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let image = new Image();
            image.src = this.src;
            setTimeout(() => {
              if (!this.shown && !this.error) {
                this.loading = true;
              }
            }, 100);
            image.onerror = () => {
              this.error = true;
              this.loading = false;
            };
            image.onload = () => {
              if ("decode" in image) {
                image.decode().then(() => {
                  this.loading = false;
                  this.shown = true;
                });
              } else {
                this.loading = false;
                this.shown = true;
              }
            };
            elementObserver.unobserve(this.element.nativeElement);
          }
        });
      }, {
        rootMargin: "0px 0px 200px 0px"
      });
      elementObserver.observe(this.element.nativeElement);
    } else {
      console.error('IntersectionObserver not available.');
      this.loading = false;
      this.shown = true;
    }
  }

}
