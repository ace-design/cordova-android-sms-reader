import Action from "./Action";
import PermissionAction from "./model/PermissionAction";

export default class Permission extends Action {

    protected action: string = "permission";


    protected exec(data: PermissionAction): Promise<void> {
        return super.exec(data) as Promise<void>;
    }

    async requestPermission(): Promise<void> {
       return this.exec(PermissionAction.REQUEST);
    }

    async assertPermission(): Promise<void> {
        return this.exec(PermissionAction.CHECK)
    }

}
