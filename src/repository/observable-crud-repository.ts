import { Observable } from "rxjs";
import { CrudRepository } from "./crud-repository";
import { CrudRepositoryEvent } from "./crud-repository-event";

/**
 * Interface for Oberservable CrudRepositories. Adds changes observable upon the CrudRepository interface.
 */
export interface ObservableCrudRepository<TYPE, IDTYPE> extends CrudRepository<TYPE, IDTYPE> {
    
    changes: Observable<CrudRepositoryEvent>;

}
