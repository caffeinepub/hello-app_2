import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Greeting {
    name: string;
    message: string;
}
export interface backendInterface {
    getAllGreetings(): Promise<Array<Greeting>>;
    getGreeting(name: string): Promise<Greeting>;
    greet(name: string): Promise<Greeting>;
}
