import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  private _alertHeader:string;
  private _alertContent:string;

  private _isClose:boolean;

  @Output() isAccept=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  get alertHeader():string{
    return this._alertHeader;
  }
  get alertContent():string{
    return this._alertContent;
  }
  set alertHeader(alertHeader:string){
    this._alertHeader=alertHeader;
  }
  set alertContent(alertContent:string){
    this._alertContent=alertContent;
  }
  isDenial(bool:boolean){
    this._isClose=bool;
    this.isAccept.emit(bool);
  }
  isClose(){
    return (!this._isClose?"alert--close":"");
  }
}
