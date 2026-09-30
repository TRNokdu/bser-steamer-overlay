export class Res<T extends object> {
  code: string
  message: string
  data?: T
}
