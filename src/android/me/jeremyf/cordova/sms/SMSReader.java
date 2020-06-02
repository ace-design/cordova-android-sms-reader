package me.jeremyf.cordova.sms;

import android.content.pm.PackageManager;
import me.jeremyf.cordova.sms.action.PermissionAction;
import me.jeremyf.cordova.sms.action.ReadAction;
import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;


public class SMSReader extends CordovaPlugin {

    private CallbackContext callbackContext;

    /**
     * @param action          permission OR read
     * @param data            REQUEST|CHECK for permission
     *                        OR  ALL | INBOX | SENT | null
     * @param callbackContext
     * @return
     * @throws JSONException
     */
//    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext)
            throws JSONException {
        if (data.length() < 1) {
            callbackContext.error("JSONArray require at minimum one argument");
        }
        this.callbackContext = callbackContext;

        switch (action) {
            case "permission":
                PermissionAction permissionAction = new PermissionAction(
                        this,
                        this.callbackContext
                );
                return permissionAction.run(data.getString(0));
            case "read":
                ReadAction readAction = new ReadAction(
                        this,
                        this.callbackContext
                );
                return readAction.run(data.getString(0));
        }
        this.callbackContext.error("Action is empty or unavailable : " + action);
        return true;
    }

    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults)
            throws JSONException {
        for (int r : grantResults) {
            if (r == PackageManager.PERMISSION_DENIED) {
                this.callbackContext.error("PERMISSION_DENIED");
                return;
            }
        }
        permissionGranted();
    }

    private void permissionGranted() {
        this.callbackContext.success("PERMISSION_GRANTED");
    }
//    private void read(String where, String filter) {
//
//    }
}
