import { Fund } from "./fund.model";

export interface Category {
    label: string;
    funds: Fund[];
}
