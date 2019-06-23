//getFullYear, getMonth, getDate
//현재 시간 출력
Date.prototype.yyyymmdd = function () {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ?
        `0${this.getMonth() + 1}` : this.getMonth() + 1;
    const dd= this.getDate() < 10 ?
        `0${this.getDate()}` : this.getDate();
    return '' + yyyy+ mm+ dd;
}

const date = new Date();

console.log(date.yyyymmdd());

//UTC 기준 날짜 출력
const date = new Date();
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));