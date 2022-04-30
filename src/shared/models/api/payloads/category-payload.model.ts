import { FundPayload } from "./fund-payload.model";

export interface CategoryPayload {
    funds?: FundPayload[];
    name: string;
}
