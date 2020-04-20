import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

    messages = [
        'You are friends with Pranav! =)',
        'Pranav liked your tweet!',
        'you will never beileve what pranav said.'
    ];

    constructor() { }

}
