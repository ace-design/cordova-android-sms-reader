package me.jeremyf.cordova.sms.action;

import android.Manifest;
import org.apache.cordova.*;


public class PermissionAction extends Action {

    public final static String[] PERMISSIONS = {
            Manifest.permission.READ_SMS
    };

    public PermissionAction(CordovaPlugin plugin, CallbackContext callbackContext) {
        super(plugin, callbackContext);
    }

    private boolean checkPermissions() {
        if (this.hasPermissions()) {
            this.callbackContext.success();
            return true;
        }
        this.callbackContext.error("Permissions not granted");
        return false;
    }

    private boolean requestPermissions() {
        if (this.hasPermissions()) {
            this.callbackContext.success("PERMISSION_GRANTED");
            return true;
        }
        this.plugin.cordova.requestPermissions(this.plugin, 1, PermissionAction.PERMISSIONS);
        return false;
    }

    /**
     *
     * @return
     */
    private boolean hasPermissions() {
        boolean result = true;
        for (int i = 0; i < PermissionAction.PERMISSIONS.length && result; i++) {
            result = this.plugin.cordova.hasPermission(PermissionAction.PERMISSIONS[i]);
        }
        return result;
    }

    public boolean run(String action) {
        switch (action) {
            case "REQUEST":
                return this.requestPermissions();
            case "CHECK":
                return this.checkPermissions();
        }
        return false;
    }
}
