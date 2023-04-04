export class MysqlHelper {
  static map(value: any): any {
    if (Array.isArray(value)) {
      return value.map((item: any) => MysqlHelper.map(item))
    }
    value.date = new Date(value.date)
    return value
  }
}
