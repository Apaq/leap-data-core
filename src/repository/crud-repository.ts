import { Page } from "../domain/page";
import { PageRequest } from "../domain/page-request";

/**
 * Interface for generic CRUD (Create, Read, Update, Delete) operations on a repository 
 * for a specific entity type. This interface provides a blueprint for repositories to 
 * handle entities of any type, identified by an ID of a specific type.
 *
 * @template TYPE - The type of the entity the repository manages.
 * @template IDTYPE - The type of the unique identifier for the entity.
 */
export interface CrudRepository<TYPE, IDTYPE> {

    /**
     * Retrieves all entities from the repository
     *
     * @param {PageRequest} [pageable] - Optional pagination information (page number, page size).
     * @returns {Promise<Page<TYPE>>} - A promise that resolves to a page of entities.
     */
    findAll(pageable?: PageRequest): Promise<Page<TYPE>>;

    /**
     * Retrieves an entity by its unique identifier.
     *
     * @param {IDTYPE} id - The unique identifier of the entity.
     * @returns {Promise<TYPE>} - A promise that resolves to the entity, or rejects if not found.
     */
    findById(id: IDTYPE): Promise<TYPE>;

    /**
     * Saves a given entity in the repository, creating a new entity if it doesn't exist,
     * or updating the existing one if it does.
     *
     * @param {TYPE} entity - The entity to save.
     * @returns {Promise<TYPE>} - A promise that resolves to the saved entity.
     */
    save(entity: TYPE): Promise<TYPE>;

    /**
     * Saves multiple entities in the repository, creating new entities if they don't exist,
     * or updating the existing ones if they do.
     *
     * @param {TYPE[]} entities - The entities to save.
     * @returns {Promise<TYPE[]}> - A promise that resolves to the saved entities.
     */
    saveAll(entities: TYPE[]): Promise<TYPE[]>;

    /**
     * Deletes an entity by its unique identifier from the repository.
     *
     * @param {IDTYPE} id - The unique identifier of the entity to delete.
     * @returns {Promise<void>} - A promise that resolves when the entity is deleted.
     */
    deleteById(id: IDTYPE): Promise<void>;

    /**
     * Deletes multiple entities identified by their unique identifiers from the repository.
     *
     * @param {IDTYPE[]} ids - The unique identifiers of the entities to delete.
     * @returns {Promise<void>} - A promise that resolves when the entities are deleted.
     */
    deleteAllById(ids: IDTYPE[]): Promise<void>;

    /**
     * Deletes a given entity from the repository.
     *
     * @param {TYPE} entity - The entity to delete.
     * @returns {Promise<void>} - A promise that resolves when the entity is deleted.
     */
    delete(entity: TYPE): Promise<void>;

    /**
     * Deletes multiple entities from the repository. If entities are specified, then only the specified will be deleted.
     * Otherwise all entities will be deleted.
     *
     * @param {TYPE[]} entities - The entities to delete. (Optional)
     * @returns {Promise<void>} - A promise that resolves when the entities are deleted.
     */
    deleteAll(entities?: TYPE[]): Promise<void>;

}
