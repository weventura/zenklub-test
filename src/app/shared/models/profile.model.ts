import { Address } from './address.model';

export interface Profile {
    name: string;
    specialization: string;
    avatar: string;
    description: string;
    address: Address;
    viewers: Viewers;
    job: Job;
}

export interface Viewers {
    totalCount: number;
    rating: number[];
}

export interface Job {
    price: number;
    estimatedTime: string;
}