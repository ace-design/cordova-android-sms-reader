import Action from "./Action";
import SMS from "./model/SMS";
import SMSSource from "./model/SMSSource";
import SMSResult from "./lib/SMSResult";

export default class SMSReader extends Action {
    protected action: string = "read";

    public async read(from: SMSSource = SMSSource.ALL): Promise<SMSResult>{
        return new SMSResult(await super.exec(from) as unknown as SMS[]);
    }
}
