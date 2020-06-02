package me.jeremyf.cordova.sms.model;

import android.database.Cursor;
import me.jeremyf.cordova.sms.action.ReadAction;
import org.json.JSONException;
import org.json.JSONObject;

public class SMS {
    public int id;
    public String address;
    public String body;
    public Boolean read;
    public long date;
    public int type;

    public SMS(Cursor cursor) {
        this.id = cursor.getInt(cursor.getColumnIndexOrThrow("_id"));
        this.address = cursor.getString(cursor.getColumnIndexOrThrow("address"));
        this.body = cursor.getString(cursor.getColumnIndexOrThrow("body"));
        this.read = cursor.getInt(cursor.getColumnIndexOrThrow("read")) == 1;
        this.date = cursor.getLong(cursor.getColumnIndexOrThrow("date"));
        this.type = cursor.getInt(cursor.getColumnIndexOrThrow("type"));
    }
    public JSONObject toJSON() throws JSONException {
        JSONObject sms = new JSONObject();
        sms.put("id", this.id);
        sms.put("address", this.address);
        sms.put("body", this.body);
        sms.put("read", this.read);
        sms.put("date", this.date);
        sms.put("type", ReadAction.SOURCES.get(this.type));
        return sms;
    }
}
