import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html'
}
)
export class ContactListComponent {
    printable = true;
    message = 'Xin chào, contacListComponent!';
    tabIndex = 1;

    doClick() {
        this.message = 'Button clicked';
        setTimeout(() => {
            this.message = 'Button click done!!!';
        }, 4000);
    }
    // tslint:disable-next-line:member-ordering
    contacts = [{
        id: 1,
        name: 'name 1',
        job: 'web',
        avatar: {
            url: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
        }
    }, {
        id: 2,
        name: 'name 2',
        job: 'dev',
        avatar: {
            url: ''
        }
    }, {
        id: 3,
        name: 'name 3',
        job: 'test',
        avatar: {
            url: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
        }
    }
    ];

    changeTab(tabIndex) {
        this.tabIndex = tabIndex;
    }
}
