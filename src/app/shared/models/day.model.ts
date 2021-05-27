import { Schedule } from './schedule.model';

export interface Day {
    name: string;
    prefix: string;
    available: boolean;
    current: number;
    schedules: Schedule[];
}