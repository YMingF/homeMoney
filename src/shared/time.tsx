export class Time {
  date: Date;
  constructor(date = new Date()) {
    this.date = date;
  }
  format(pattern = "YYYY-MM-DD") {
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    const day = this.date.getDate();
    const hour = this.date.getHours();
    const minute = this.date.getMinutes();
    const second = this.date.getSeconds();
    const msecond = this.date.getMilliseconds();
    return pattern
      .replace(/YYYY/g, year.toString())
      .replace(/MM/, month.toString().padStart(2, "0"))
      .replace(/DD/, day.toString().padStart(2, "0"))
      .replace(/HH/, hour.toString().padStart(2, "0"))
      .replace(/mm/, minute.toString().padStart(2, "0"))
      .replace(/ss/, second.toString().padStart(2, "0"))
      .replace(/SSS/, msecond.toString().padStart(3, "0"));
  }
  firstDayOfMonth() {
    return new Time(
      new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0)
    );
  }
  firstDayOfYear() {
    return new Time(new Date(this.date.getFullYear(), 0, 1, 0, 0, 0));
  }
  lastDayOfMonth() {
    return new Time(
      new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0, 0, 0, 0)
    );
  }
  lastDayOfYear() {
    return new Time(new Date(this.date.getFullYear() + 1, 0, 0, 0, 0, 0));
  }
  add(
    amount: number,
    unit:
      | "year"
      | "month"
      | "day"
      | "hour"
      | "minute"
      | "second"
      | "millisecond"
  ) {
    let date = new Date(this.date.getTime());
    switch (unit) {
      case "year":
        date.setFullYear(date.getFullYear() + amount);
        break;
      case "month":
        const d = date.getDate(); // 获取当前的日，比如时间2022-11-10，getDate()获取的就是10
        date.setDate(1); // 将日设置为1
        date.setMonth(date.getMonth() + amount);
        const d2 = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0,
          0,
          0,
          0
        ).getDate(); // 获取下个月的最后一天
        date.setDate(Math.min(d, d2)); // 从两个日子中取最小值，来作为最后一天
        break;
      case "day":
        date.setDate(date.getDate() + amount);
        break;
      case "hour":
        date.setHours(date.getHours() + amount);
        break;
      case "minute":
        date.setMinutes(date.getMinutes() + amount);
        break;
      case "second":
        date.setSeconds(date.getSeconds() + amount);
        break;
      case "millisecond":
        date.setMilliseconds(date.getMilliseconds() + amount);
        break;
      default:
        throw new Error("Time.add: unknown unit");
    }
    return new Time(date);
  }
}
