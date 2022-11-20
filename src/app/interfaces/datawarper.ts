export interface Datawarper<T> {
    status:string,
    message:string|null,
    data:T,
    total_todoes:number,
    total_pages:number
}
