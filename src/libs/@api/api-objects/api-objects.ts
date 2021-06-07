export namespace APISchema {
    export interface B2aUser {
        id: number;
        name: string;
        surname: string;
        email: string;
        apiKey?: string;
        created: string;
        createdBy: B2aUser | null;
        updated: string;
        updatedBy: B2aUser | null;
    }
}
