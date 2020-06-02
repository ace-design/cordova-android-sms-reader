import Action from "./Action";
import SMSSource from "./model/SMSSource";
import SMSResult from "./lib/SMSResult";
export default class SMSReader extends Action {
    protected action: string;
    read(from?: SMSSource): Promise<SMSResult>;
}
