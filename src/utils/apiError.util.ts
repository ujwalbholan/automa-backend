class ApiError extends Error {
    public statusCode: number;
    public data: null;
    public errors: any[];
    public override stack?: string;

    constructor(
        statusCode: number,
        message: "something went wrong" | "not found" | "bad request" | "unauthorized" | "forbidden",
        errors: any[] = [],
        stack?: string
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
