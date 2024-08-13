export class Pool {
    poolID: number;
    fish: string;
    average: number;
    amount: number;

    constructor(poolID: number, fish: string, average: number, amount: number) {
        this.poolID = poolID;
        this.fish = fish;
        this.average = average;
        this.amount = amount;
    }
}