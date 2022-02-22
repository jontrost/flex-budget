import { Bucket } from "./bucket.model";

export interface Category {
    label: string;
    buckets: Bucket[];
}
