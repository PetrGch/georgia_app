import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalWindowService} from './modal-window.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.less']
})
export class ModalWindowComponent implements OnInit, OnDestroy {

  @Input()
  id: string;
  private element: any;

  constructor(private modalWindowService: ModalWindowService,
              private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    if (!this.id) {
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (e: any) => {
      console.log(e.target.className);
      if (e.target.className === 'modalWindow') {
        this.close();
      }
    });

    this.modalWindowService.add(this);
  }

  ngOnDestroy(): void {
    this.modalWindowService.remove(this.id);
    this.element = null;
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modalWindow--open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modalWindow--open');
  }
}
