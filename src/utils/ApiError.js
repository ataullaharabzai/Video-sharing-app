class ApiError extends Error {
  constructor(statusCode, message = "Internal Server error", errors = []) {
    super(message);
    ((this.statusCode = statusCode),
      (this.message = message),
      (this.errors = errors),
      (this.success = false),
      (this.data = null));
  }
}

export {ApiError}