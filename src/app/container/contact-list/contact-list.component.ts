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

    contact = [{
        id: 1,
        name: 'name 1',
        job: 'web',
        avatar: {
            url: ''
        }
    }, {
        
    }
    }];
}
