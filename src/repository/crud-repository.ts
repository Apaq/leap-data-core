import { Page } from "../domain/page";
import { PageRequest } from "../domain/page-request";

/**
 * Interface for generic CRUD operations on a repository for a specific type.
 */
export interface CrudRepository<TYPE, IDTYPE> {
    findAll(pageable?: PageRequest): Promise<Page<TYPE>>; 
    findById(id: IDTYPE): Promise<TYPE>;
    save(entity: TYPE): Promise<TYPE>;
    saveAll(entities: TYPE[]): Promise<TYPE[]>;
    deleteById(id: IDTYPE): Promise<void>;
    deleteAllById(ids: IDTYPE[]): Promise<void>;
    delete(entity: TYPE): Promise<void>;
    deleteAll(entities: TYPE[]): Promise<void>;
}