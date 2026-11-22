class ApiResponse {
  constructor(message = "Success", data, statusCode) {
    ((this.message = message),
      (this.data = data),
      (this.statusCode = statusCode));
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
