/**
 * Interface for a Page.
 * 
 * A Page specified a segment of data retrieved from a ContentRepository.
 */
export interface Page<T> {
    /**
     * The total elements matching the request and spanning all pages.
     */
    totalElements: number;
    /**
     * The number of pages mathcing the request.
     */
    totalPages: number;
    /**
     * The size of the page.
     */
    size: number;
    /**
     * The page content.
     */
    content: T[];
}