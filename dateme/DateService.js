
    // Date.prototype.toISOString = function() {
    //         // Permets de s'affranchir de la timezone locale
    //         return this.getFullYear() + '-'
    //             + (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1) + '-'
    //             + (this.getDate() < 10 ? '0' : '') + this.getDate();
    //     };

    const _deliminer ="-";
    function getNextDay() {

//        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
    }

    function getPreviousDay(dateString){
        const date = {
            year : getYear(dateString),
            month :getMonth(dateString),
            day : getDay(dateString),
            hour : getDate(dateString).getHours(),
            minutes : getDate(dateString).getMinutes(),
            second : getDate(dateString)?.getSeconds(),
            milliseconds : getDate(dateString)?.getMilliseconds()
        }
        console.log("get year000 "+ getDate(dateString).getUTCDay());
        return new Date(date.year, date.month, date.day - 1);
    }


    /**
     * @param {String} dateString
     * @returns {number}
     */
    function getYear(dateString){
        return getDate(dateString).getFullYear();
    }
    /**
     * @param {String} dateString:
     * @returns {number}
     */
    function getMonth(dateString){
        return getDate(dateString).getMonth();
    }
    /**
     * @param {String} dateString
     * @returns {number}
     */
    function getDay(dateString){
        return getDate(dateString).getDay();
    }
    /**
     * @param {String} dateString
     * @returns {null|Date}
     */
   function getDate(dateString) {
        if (dateString) {
            return StringToDate(dateString,"yyyy-mm-dd","-");
        } else {
            return null;
        }
    }
    /**
     *
     * @param {String,String,String} _date,_format,_delimiter
     * @returns {null|Date}
     */
   function StringToDate(_date,_format,_delimiter) {
        let formatLowerCase=_format.toLowerCase();
        let formatItems=formatLowerCase.split(_delimiter);
        let dateItems=_date.split(_delimiter);
        let monthIndex=formatItems.indexOf("mm");
        let dayIndex=formatItems.indexOf("dd");
        let yearIndex=formatItems.indexOf("yyyy");
        let month=parseInt(dateItems[monthIndex]);
        month-=1;
        return new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
    }

    function getDay(_date,_format,_delimiter){
        let formatLowerCase=_format.toLowerCase();
        let formatItems=formatLowerCase.split(_delimiter);
        let dateItems=_date.split(_delimiter);
        let dayIndex=formatItems.indexOf("dd");
        return dateItems[dayIndex];
    }

    /**
     * function to return todays date
     * @returns {Date}
     */
    function getToday(){
        const today = new Date();
        today.setUTCHours(0);
        today.setUTCMinutes(0);
        today.setUTCSeconds(0);
        today.setUTCMilliseconds(0);
        return today;
    }

    /**
     * function to return if a date is active or not active
     * @param {String,String} (dateDebut,dateFin)
     * @returns {Boolean}
     */
    function IsActive(dateDebut, dateFin) {
        const now = getToday().getTime();
        return (!dateDebut || dateDebut.getTime() <= now)
            && (!dateFin || dateFin.getTime() > now);
    }


module.exports = {
        getToday,
        IsActive,
    StringToDate,
    getDate,
    getNextDay,
    getPreviousDay,
    getDay,
    getMonth,
    getYear


};
