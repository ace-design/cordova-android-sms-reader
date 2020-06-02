import SMSSource from "./SMSSource";
export default interface SMS {
    id: number;
    address: string;
    body: string;
    read: boolean;
    date: number;
    type: SMSSource;
}
