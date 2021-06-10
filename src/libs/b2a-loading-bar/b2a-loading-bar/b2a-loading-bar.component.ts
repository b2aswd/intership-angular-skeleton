import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {
    B2aLoadingBarEventType,
    B2aLoadingBarService,
    isPresent,
} from '../service/b2a-loading-bar.service';

@Component({
    selector: 'b2a-loading-bar',
    styleUrls: ['./b2a-loading-bar.component.scss'],
    host: {
        '[style.backgroundColor]': 'color',
        '[style.color]': 'color',
        '[style.height]': 'height',
        '[style.width]': '0',
    },
    template: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B2aLoadingBarComponent implements OnInit {
    @Input() color = '#222b45';
    @Input() height = '2px';

    constructor(private _b2aLoadingBarService: B2aLoadingBarService, private _elmRef: ElementRef) {}

    ngOnInit() {
        this._b2aLoadingBarService.events.subscribe((event) => {
            if (event.type === B2aLoadingBarEventType.PROGRESS && isPresent(event.value)) {
                this._elmRef.nativeElement.style.width = event.value + '%';
            }
            this._elmRef.nativeElement.visible =
                event.type === B2aLoadingBarEventType.VISIBLE ? event.value : false;
        });
    }
}
