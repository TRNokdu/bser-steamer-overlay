function HttpResponse<T>(code: string, message: string, data?: T) {
  if (!data) {
    return {
      code: code,
      message: message,
    };
  }
  return {
    code: code,
    message: message,
    data: data,
  };
}

export default HttpResponse;
