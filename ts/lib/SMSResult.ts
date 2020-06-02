import SMS from "../model/SMS";

export default class SMSResult {

    constructor(
        private allSMS: SMS[],
        private callbackFilters: ((sms: SMS) => boolean)[] = []
    ) {
    }

    /**
     * Filter the SMS of an @link{SMSResult} that meet the condition specified in a callbackFn function.
     * @param callbackFn A function that take sms. The filter method calls the callbackFn function one time for each sms in the current SMSResult and return new SMSResult
     * @return new SMSResult
     */
    public filter(callbackFn: (sms: SMS) => boolean): SMSResult {
        return new SMSResult(this.allSMS, this.callbackFilters.concat(callbackFn));
    }

    /**
     * Filter SMS checking phone numbers
     * @param phoneNumbers
     */
    public withPhoneNumbers(...phoneNumbers: string[]): SMSResult {
        return this.filter((sms) => {
            return phoneNumbers.indexOf(sms.address) >= 0;
        });
    }

    /**
     *
     * @param search
     * @param isCaseSensitive
     */
    public bodiesInclude(search: string, isCaseSensitive: boolean = false): SMSResult {
        if (isCaseSensitive) {
            return this.filter(sms => sms.body.includes(search));
        }
        const searchLowerCase = search.toLowerCase();
        return this.filter(sms => sms.body.toLowerCase().includes(searchLowerCase));
    }

    /**
     * Filter SMS
     * @param since
     */
    public since(since: string | number | Date) {
        const d: Date = new Date(since);
        return this.filter((sms) => {
            return new Date(sms.date).getTime() >= d.getTime();
        });
    }

    /**
     * Filter only the read sms
     * @return SMSResult
     */
    public read(): SMSResult {
        return this.filter(sms => sms.read);
    }

    /**
     * Get all sms
     */
    public get all(): SMS[] {
        return this.allSMS.filter((sms) => {
            let result: boolean = true;
            for (let i: number = 0; i < this.callbackFilters.length && result; i++) {
                result = this.callbackFilters[i](sms);
            }
            return result;
        });
    }
}
