package me.jeremyf.cordova.sms;

import android.Manifest;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;


public class Reader extends CordovaPlugin {
    static String[] permissions = {
            Manifest.permission.READ_SMS
    };

    /**
     * @param action          permission OR read
     * @param data            [] for permission  OR [IN, FILTER]
     *                        Where    IN = ALL | INBOX | SENT | null
     *                        FILTER = {[key: String]: String[] | String}
     *                        If value is an array we check all, else only the string
     * @param callbackContext
     * @return
     * @throws JSONException
     */
    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext)
            throws JSONException {
        switch (action) {
            case "permission":
                if (this.ensurePermission()) {
                    callbackContext.success("YES");
                } else {
                    callbackContext.success("NO");
                }
                break;
            case "read":
                callbackContext.success("sms");
            break;
        }
    }

    public boolean ensurePermission() {
        if (cordova.hasPermission(Manifest.permission.READ_SMS)) {
            return true;
        }
        cordova.requestPermissions(this, 0, Reader.permissions);
        return false;
    }
}
