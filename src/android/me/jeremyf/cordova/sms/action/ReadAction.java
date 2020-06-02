package me.jeremyf.cordova.sms.action;

import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import me.jeremyf.cordova.sms.model.SMS;
import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class ReadAction extends Action {
    public static List<String> SOURCES = Arrays.asList("", "inbox", "sent");

    public ReadAction(CordovaPlugin plugin, CallbackContext callbackContext) {
        super(plugin, callbackContext);
    }

    public boolean run(String source) {
        if (!ReadAction.SOURCES.contains(source)) {
            this.callbackContext.error("Bad source");
            return false;
        }
        try {
            JSONArray smsArray = smsArrayToJSON(fetchSMS(source));
            this.callbackContext.success(smsArray);
            return true;
        } catch (JSONException e) {
            this.callbackContext.error("JSONException - Can't convert sms to json array");
            return false;
        }

    }
    private JSONArray smsArrayToJSON(ArrayList<SMS> allSMS) throws JSONException {
        JSONArray arrayResult = new JSONArray();
        for (SMS sms : allSMS) {
            arrayResult.put(sms.toJSON());
        }
        return arrayResult;
    }
    private ArrayList<SMS> fetchSMS(String source) {
        ArrayList<SMS> smsResult = new ArrayList<>();

        Uri message = Uri.parse("content://sms/" + source);
        ContentResolver contentResolver = this.plugin.cordova.getActivity().getContentResolver();

        Cursor cursor = contentResolver.query(message, null, null, null, null);
        int totalSMS = cursor.getCount();
        if (cursor.moveToFirst()) {
            for (int i = 0; i < totalSMS; i++) {
                SMS sms = new SMS(cursor);
                smsResult.add(sms);
                cursor.moveToNext();
            }
        }
        cursor.close();
        return smsResult;
    }
}
