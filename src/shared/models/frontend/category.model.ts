import { Fund } from "./fund.model";

export interface Category {
    _id: string;
    funds?: Fund[];
    name: string;
}
