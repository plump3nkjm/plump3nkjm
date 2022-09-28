type ErrorResponseName = "BadRequest" | "Unauthorized" | "Forbidden" | "NotFound"

export const baseResponse = (statusCode: number, body: any) => {
    return {
        statusCode: statusCode,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    };
};

export const apiError = (name: ErrorResponseName, message: string) => {
    switch (name) {
        case "BadRequest":
            return baseResponse(400, {
                error: name,
                message: message || ""
            });
        case "Unauthorized":
            return baseResponse(401, {
                error: name,
                message: message || ""
            });
        case "Forbidden":
            return baseResponse(403, {
                error: name,
                message: message || ""
            });
        case "NotFound":
            return baseResponse(404, {
                error: name,
                message: message || ""
            });
        default:
            return baseResponse(500, {
                error: "InternalFailureException",
                message: message || ""
            });
    }
};


