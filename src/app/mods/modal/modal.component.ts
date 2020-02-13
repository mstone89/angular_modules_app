import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
    @Output() close = new EventEmitter();

    constructor(private element: ElementRef) { }

    // called once after component is first dispalyed on screen
    // and after angular sets props passed down to child
    ngOnInit() {
        document.body.appendChild(this.element.nativeElement);
    }

    ngOnDestroy() {
        this.element.nativeElement.remove();
    }

    onCloseClick() {
        this.close.emit();
    }
}
