import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})

export class ServerComponent implements OnInit{
    allowNewServer = true;
    serverCreationStatus = 'No server was created!';
    serverName='';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = false;
        },2000);
    }
    ngOnInit(){
    }
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
    onCreateServer() {
        this.serverCreationStatus = 'Server was created!'
    }
    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}