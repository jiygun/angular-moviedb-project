export interface Database{
    insert(url:string,data:any);
    get(url:string,...[]);
    update(url:string,data:any);
    delete(url:string,data:any);
}