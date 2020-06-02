package me.jeremyf.cordova.sms.action;

import org.apache.cordova.*;

public abstract class Action {
    protected final CordovaPlugin plugin;
    protected CordovaInterface cordova;
    protected CallbackContext callbackContext;

    public Action(CordovaPlugin plugin, CallbackContext callbackContext) {
        this.callbackContext = callbackContext;
        this.plugin = plugin;
    }

    public abstract boolean run(String action);

}
