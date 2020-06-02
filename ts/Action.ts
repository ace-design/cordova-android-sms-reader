import SMSSource from "./model/SMSSource";
import PermissionAction from "./model/PermissionAction";
import SMSResult from "./lib/SMSResult";
import SMS from "./model/SMS";

export default abstract class Action {
    protected abstract action: string;

    protected exec(data: SMSSource | PermissionAction): Promise<SMS[] | void> {
        return new Promise<void>((resolve, reject) => {
            cordova.exec(resolve, reject, "AndroidSMSReader", this.action, [data]);
            // this.exec(resolve, reject, PermissionAction.REQUEST)
        });
    }
}
