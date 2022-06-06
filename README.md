# EventTrackerProject

## Overview

Rentee is an application designed to allow property managers to track the properties, and income and expenses associated per unit , and per building. it
currently only has two tables one for building type and one for a property. Which contains the buliding types and the property itself. the current features are
adding a build and adding a building type to it. 



## Technology Used

* Java 8
* Spring Boot
* Spring Data JPA
* Rest api
* SQL
* JPQL
* MySQL
* Git
* Gradle
* PostMan

## Expected Routes

## Propert Type Routes

### Medication Routes

|      Return Type       |   Method   |                    Route                                |       Functionality       |
|------------------------|------------|---------------------------------------------------------|---------------------------|
| `List<PropertyType>`     | **GET**    | `http://localhost:8083/api/types           `                | *Find all Property Types*    |
| `PropertyType`           | **GET**    | `http://localhost:8083/api/types/{id}`                     | *Find a ProperyType by ID* |
| `PropertType`           | **POST**   | `http://localhost:8083/api/types/`                          | *Create New PropertyType*   |
| `PropertyType`           | **PUT**    | `http://localhost:8083/api/types/{id}`                      | *Update ProperType*       |
| `void`                 | **DELETE** | `http://localhost:8083/api/type/{id}`                        |  *Delete PropertyType*      |
 