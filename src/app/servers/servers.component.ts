import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  pressed: boolean = false;
  count: number = 0;
  value: string = 'offline';
  serverName = '';
  serverNote = '';
  serverArray = [
    'Server test1 was added!',
    'Server test2 was added!'
  ];

  onAddPressed() {
    // console.log("clicked!");
    this.pressed = true;
    this.count += 1;
    //console.log(this.count);
    this.value = 'online';
    //console.log(this.serverName);
    this.serverNote = 'Server ' + this.serverName + ' was added!';
    this.serverArray.push(this.serverNote);
    //console.log(this.serverNote);

    setTimeout(() => {
      this.pressed = false;
      this.value = 'offline';
    }, 2000);
  }

  getColor() {
    return this.count >= 5? 'green' : 'red';
  }
}
