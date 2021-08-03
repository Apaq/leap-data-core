/**
 * Interface for PageRequest.
 * 
 * A PageRequest is used to specify the segment of data to retreive from a CrudRepository.
 */
 export interface PageRequest {
    page: number;
    size: number;
    sort: string;
}