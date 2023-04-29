import { Guid } from "guid-typescript";

export class Hero {
    id: string = Guid.create().toString();
    name: string = '';
    isGood: boolean = true;
    power: number = 1;
    imageBase64: string = '';
}