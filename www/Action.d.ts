import SMSSource from "./model/SMSSource";
import PermissionAction from "./model/PermissionAction";
import SMS from "./model/SMS";
export default abstract class Action {
    protected abstract action: string;
    protected exec(data: SMSSource | PermissionAction): Promise<SMS[] | void>;
}
