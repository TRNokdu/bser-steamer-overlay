type IErClientData<T> = {
  isError: false
  data: T
}

type IErClientError = {
  isError: true
  data: null
}

export type IErClient<T> = IErClientData<T> | IErClientError
