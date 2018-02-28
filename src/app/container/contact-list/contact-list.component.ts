import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html'
}
)
export class ContactListComponent {
    printable = true;
    message = 'Xin chào, contacListComponent!';
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
            url: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
        }
    }
    ];
}