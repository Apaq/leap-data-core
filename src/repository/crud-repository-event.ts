
/**
 * Interface for events emitted by ObservableCrudRepository.
 */
export interface CrudRepositoryEvent {
    /**
     * The type of the event.
     */
    type: 'Created' | 'Updated' | 'Deleted';

    /**
     * The id of the entity changed in the repository.
     */
    id: string;
}