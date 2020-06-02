import Action from "./Action";
import PermissionAction from "./model/PermissionAction";
export default class Permission extends Action {
    protected action: string;
    protected exec(data: PermissionAction): Promise<void>;
    requestPermission(): Promise<void>;
    assertPermission(): Promise<void>;
}
