export type Stream<T> = AsyncGenerator<T, void, unknown> & {totalCount?: number};

/**
 * The `StreamableRepository` interface represents a repository that allows
 * streaming of its items. It is a generic interface, meaning it can be used 
 * with any type of item.
 *
 * @typeParam T - The type of the items that the repository holds and streams.
 */
export interface StreamableRepository<T> {

    /**
     * Streams the items stored in the repository as an asynchronous generator.
     * 
     * This method returns an `AsyncGenerator`, which allows the caller to 
     * iterate over the items one by one, processing them asynchronously. 
     * This is particularly useful for handling large datasets where loading 
     * everything into memory at once is not feasible.
     *
     * @returns {AsyncGenerator<T, void, unknown>} 
     * An asynchronous generator that yields items of type `T` one by one.
     */
    stream(): Stream<T>;
}
