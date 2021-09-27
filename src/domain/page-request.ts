/**
 * Interface for PageRequest.
 * 
 * A PageRequest is used to specify the segment of data to retreive from a CrudRepository.
 */
export interface PageRequest {
    /**
     * The zero-based page number requested.
     */
    page?: number;
    /**
     * The requested size of the returned page.
     */
    size?: number;
    /**
     * The sorting of the data requested.
     */
    sort?: string;
}