import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {TabContent} from "../../types/tab-content.type";

@Component({
    selector: 'app-tabs-group',
    templateUrl: './tabs-group.component.html',
    styleUrls: ['./tabs-group.component.css']
})
export class TabsGroupComponent {
    @Input() tabContents: TabContent[] = [];
    @Input() template!: TemplateRef<any>;
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
