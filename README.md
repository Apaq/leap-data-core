# Leap Data Core

Leap Data Core is a data layer library for JavaScript/TypeScript, designed to provide functionality similar to Spring Data. It offers a set of interfaces for performing CRUD (Create, Read, Update, Delete) operations, handling observable changes, and streaming repository items.

## Features

- **Generic CRUD Operations:** Define repositories for any entity type with support for create, read, update, and delete operations.
- **Observable Changes:** Monitor changes in repositories with RxJS observables.
- **Streaming:** Stream repository items as asynchronous generators for handling large datasets.

## Core Components

### `CrudRepository` Interface

The `CrudRepository` interface provides a blueprint for managing entities with the following methods:

- `findAll(pageable?: PageRequest): Promise<Page<TYPE>>`
  - Retrieves all entities with optional pagination.

- `findById(id: IDTYPE): Promise<TYPE>`
  - Retrieves an entity by its unique identifier.

- `save(entity: TYPE): Promise<TYPE>`
  - Saves a single entity, creating or updating as needed.

- `saveAll(entities: TYPE[]): Promise<TYPE[]>`
  - Saves multiple entities, creating or updating as needed.

- `deleteById(id: IDTYPE): Promise<void>`
  - Deletes an entity by its unique identifier.

- `deleteAllById(ids: IDTYPE[]): Promise<void>`
  - Deletes multiple entities by their unique identifiers.

- `delete(entity: TYPE): Promise<void>`
  - Deletes a single entity.

- `deleteAll(entities: TYPE[]): Promise<void>`
  - Deletes multiple entities.

- `deleteAll(): Promise<void>`
  - Deletes all entities.

### `ObservableCrudRepository` Interface

The `ObservableCrudRepository` interface extends `CrudRepository` with observable change events:

- `changes: Observable<CrudRepositoryEvent>`
  - An observable stream of CRUD repository events, allowing you to react to changes in real-time.

### `StreamableRepository` Interface

The `StreamableRepository` interface allows streaming of repository items:

- `stream(): Stream<T>`
  - Returns an asynchronous generator that yields items one by one, useful for handling large datasets without loading everything into memory at once.

## Installation

To get started with Leap Data Core, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Apaq/leap-data-core.git
    ```
2. Navigate into the project directory:
    ```bash
    cd leap-data-core
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To use the `CrudRepository`, `ObservableCrudRepository`, or `StreamableRepository` interfaces, you need to implement them for your specific entity type. Here is a basic example:

```typescript
import { CrudRepository, ObservableCrudRepository, StreamableRepository } from '@apaq/leap-data-core';
import { YourEntityType } from './your-entity';

class YourEntityRepository implements CrudRepository<YourEntityType, number>, ObservableCrudRepository<YourEntityType, number>, StreamableRepository<YourEntityType> {
    // Implement methods for CrudRepository
    // Implement observable changes for ObservableCrudRepository
    // Implement streaming for StreamableRepository
}
