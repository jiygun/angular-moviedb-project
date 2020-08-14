import { ComponentFactoryResolver, ComponentRef, ViewContainerRef } from "@angular/core";
import { AlertComponent } from "./alert.component";

export class Alert{

    private _alertHeader:string;
    private _alertContent:string;
    private _statusCode:number;
    private _component:ComponentRef<AlertComponent>;
    private _componentFactoryResolver:ComponentFactoryResolver;
    private _viewContainerRef:ViewContainerRef;

    constructor(statusCode:number,alertHeader:string,alertContent:string,viewContainerRef:ViewContainerRef,componentFactoryResolver:ComponentFactoryResolver){
        this._alertHeader="Error!";
        this._statusCode=statusCode;
        this.checkStatus();
        alertHeader!=null&&alertHeader!=undefined?this._alertHeader=alertHeader:null;
        alertContent!=null&&alertContent!=undefined?this._alertContent=alertContent:null;
        this._componentFactoryResolver=componentFactoryResolver;
        this._viewContainerRef=viewContainerRef;
        this.createAlert();
    }
    private createAlert(){
        let factory=this._componentFactoryResolver.resolveComponentFactory(AlertComponent);
        this._component = factory.create(this._viewContainerRef.parentInjector);
        this._viewContainerRef.insert(this._component.hostView);
        this._component.instance.alertHeader=this._alertHeader;
        this._component.instance.alertContent=this._alertContent;
        this._component.instance.isAccept.subscribe((result:boolean)=>{
        result?this._viewContainerRef.clear():this._viewContainerRef.clear();
        });
    }
    private checkStatus(){
        if(this._statusCode==400){
            this._alertContent="The Requested Page Is Not Available...";
          }else if(this._statusCode==401){
            this._alertContent="Please Get Permission To Make A Request..";
          }else if(this._statusCode==404){
            this._alertContent="Page Not Nound..";
          }else if(this._statusCode==501){
            this._alertContent="Service Not Found..";
          }else{
            this._alertContent="Please Try Again Later..";
          }
    }
    set statusCode(statusCode:number){
      this._statusCode=statusCode;
    }
    set alertContent(alertContent:string){
        this._alertContent=alertContent;
    }
    set viewContainerRef(viewContainerRef:ViewContainerRef){
      this._viewContainerRef=viewContainerRef;
    }
    set componentFactoryResolver(componentFactoryResolver:ComponentFactoryResolver){
      this._componentFactoryResolver=componentFactoryResolver;
    }
}