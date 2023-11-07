export interface NoSQLDatabaseWrapper{
    find(query: object): Promise<any[]>
    insert(doc: any): void
    deleteOne(id: String): void
    updateOne(id: String, data: object): void
    findOne(id: String): Promise<any|null>
}