export interface ICard {
    "id": number,
    "name": string,
    "statusId": number,
    "dueDate": string,
    "assignedTo": number | string ,
    "tagIds"?: number[],
}