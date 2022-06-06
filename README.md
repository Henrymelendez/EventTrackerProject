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

### Property Type Routes

|      Return Type       |   Method   |                    Route                                |       Functionality       |
|------------------------|------------|---------------------------------------------------------|---------------------------|
| `List<PropertyType>`     | **GET**    | `http://localhost:8083/api/types           `                | *Find all Property Types*    |
| `PropertyType`           | **GET**    | `http://localhost:8083/api/types/{id}`                     | *Find a ProperyType by ID* |
| `PropertType`           | **POST**   | `http://localhost:8083/api/types/`                          | *Create New PropertyType*   |
| `PropertyType`           | **PUT**    | `http://localhost:8083/api/types/{id}`                      | *Update ProperType*       |
| `void`                 | **DELETE** | `http://localhost:8083/api/type/{id}`                        |  *Delete PropertyType*      |


###  Property Routes

|      Return Type       |   Method   |                    Route                                |       Functionality       |
|------------------------|------------|---------------------------------------------------------|---------------------------|
| `List<Property>`         | **GET**    | `http://localhost:8083/api/type/properties`                | *Find all Propertys*    |
| `Property`              | **GET**    | `http://localhost:8083/api/properties/{id}`                | *Find a Property by ID* |
| `PropertType`           | **POST**   | `http://localhost:8083/api/types/{id}/properties`           | *Create New Property*   |
| `PropertyType`           | **PUT**    | `http://localhost:8083/api/properties/{id}`               | *Update ProperType*       |
| `void`                 | **DELETE** | `http://localhost:8083/api/types/1/properties/4`            |  *Delete PropertyType*      |



## Future Implematation 
This project is currently incomplete it needs tables and routes for maintenance, income, rental, contractors, tenants, and a table for rental history 
this would allow a property manager or owner to keep track of rent payments, expense on individual units, and who lives where and when leases expire.
this would make tracking the all that information seemlessly reducing the amount of paperwork and time the owner spends inputing information into spreadsheet and tracking
returns on investment. 


