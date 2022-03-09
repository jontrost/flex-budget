import { Fund } from "./fund.model";

export interface Category {
    funds: Fund[];
    name: string;
}
