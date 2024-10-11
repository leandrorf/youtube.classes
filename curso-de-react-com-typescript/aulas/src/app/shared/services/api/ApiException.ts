export class ApiException extends Error {
    constructor(message: string) {
        super();

        this.message = message
    }
}