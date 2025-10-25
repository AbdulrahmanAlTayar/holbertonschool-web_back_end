# NoSQL - MongoDB

This project covers NoSQL databases with a focus on MongoDB operations and Python integration using PyMongo.

## Description

NoSQL databases provide a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. This project explores MongoDB, a document-oriented NoSQL database, and demonstrates basic CRUD operations both through the MongoDB shell and Python.

## Learning Objectives

- What NoSQL means
- Difference between SQL and NoSQL
- What is ACID
- What is document storage
- NoSQL database types
- Benefits of NoSQL databases
- How to query, insert, update, and delete information from a NoSQL database
- How to use MongoDB

## Requirements

### MongoDB Command Files
- All files interpreted/compiled on Ubuntu 20.04 LTS using MongoDB (version 4.4)
- All files should end with a new line
- First line of all files should be a comment: `// my comment`

### Python Scripts
- All files interpreted/compiled on Ubuntu 20.04 LTS using Python3 (version 3.9)
- PyMongo (version 4.8.0)
- All files should end with a new line
- First line should be exactly `#!/usr/bin/env python3`
- Code should use pycodestyle style (version 2.5.*)
- All modules and functions should have documentation

## Installation

### Install MongoDB 4.4 on Ubuntu 20.04

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
```

### Install PyMongo

```bash
pip3 install pymongo
```

## Tasks

### 0. List all databases
**File:** `0-list_databases`

Script that lists all databases in MongoDB.

### 1. Create a database
**File:** `1-use_or_create_database`

Script that creates or uses the database `my_db`.

### 2. Insert document
**File:** `2-insert`

Script that inserts a document in the collection `school` with the attribute `name` set to "Holberton school".

### 3. All documents
**File:** `3-all`

Script that lists all documents in the collection `school`.

### 4. All matches
**File:** `4-match`

Script that lists all documents with `name="Holberton school"` in the collection `school`.

### 5. Count
**File:** `5-count`

Script that displays the number of documents in the collection `school`.

### 6. Update
**File:** `6-update`

Script that adds a new attribute `address` with value "972 Mission street" to documents with `name="Holberton school"`.

### 7. Delete by match
**File:** `7-delete`

Script that deletes all documents with `name="Holberton school"` in the collection `school`.

### 8. List all documents in Python
**File:** `8-all.py`

Python function that lists all documents in a collection.

**Prototype:** `def list_all(mongo_collection):`

### 9. Insert a document in Python
**File:** `9-insert_school.py`

Python function that inserts a new document in a collection based on kwargs.

**Prototype:** `def insert_school(mongo_collection, **kwargs):`

### 10. Change school topics
**File:** `10-update_topics.py`

Python function that changes all topics of a school document based on the name.

**Prototype:** `def update_topics(mongo_collection, name, topics):`

### 11. Where can I learn Python?
**File:** `11-schools_by_topic.py`

Python function that returns the list of schools having a specific topic.

**Prototype:** `def schools_by_topic(mongo_collection, topic):`

### 12. Log stats
**File:** `12-log_stats.py`

Python script that provides statistics about Nginx logs stored in MongoDB.

## Usage

### MongoDB Shell Scripts

```bash
cat 0-list_databases | mongo
cat 1-use_or_create_database | mongo
cat 2-insert | mongo my_db
cat 3-all | mongo my_db
```

### Python Scripts

```bash
./8-main.py
./9-main.py
./10-main.py
./11-main.py
./12-log_stats.py
```

## Author

Created as part of the Holberton School Web Back-End curriculum.
