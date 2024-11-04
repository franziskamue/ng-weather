import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TabContent} from "../../types/tab-content.type";

@Component({
    selector: 'app-tabs-group',
    templateUrl: './tabs-group.component.html',
    styleUrls: ['./tabs-group.component.css']
})
export class TabsGroupComponent {
    @Input() tabContents: TabContent[] = [];
    @Output() removeTabEmitter: EventEmitter<number> = new EventEmitter<number>();

    protected selectedTabIndex = 0;

    selectTab(newTabIndex: number) {
        this.selectedTabIndex = newTabIndex;
    }

    removeTab(index: number) {
        this.selectedTabIndex = 0;
        this.removeTabEmitter.emit(index);
    }
}
