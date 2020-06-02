import SMS from "../model/SMS";
export default class SMSResult {
    private allSMS;
    private callbackFilters;
    constructor(allSMS: SMS[], callbackFilters?: ((sms: SMS) => boolean)[]);
    /**
     * Filter the SMS of an @link{SMSResult} that meet the condition specified in a callbackFn function.
     * @param callbackFn A function that take sms. The filter method calls the callbackFn function one time for each sms in the current SMSResult and return new SMSResult
     * @return new SMSResult
     */
    filter(callbackFn: (sms: SMS) => boolean): SMSResult;
    /**
     * Filter SMS checking phone numbers
     * @param phoneNumbers
     */
    withPhoneNumbers(...phoneNumbers: string[]): SMSResult;
    /**
     *
     * @param search
     * @param isCaseSensitive
     */
    bodiesInclude(search: string, isCaseSensitive?: boolean): SMSResult;
    /**
     * Filter SMS
     * @param since
     */
    since(since: string | number | Date): SMSResult;
    /**
     * Filter only the read sms
     * @return SMSResult
     */
    read(): SMSResult;
    /**
     * Get all sms
     */
    get all(): SMS[];
}
