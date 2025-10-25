# Pagination

This project implements various pagination techniques for handling large datasets efficiently.

## Description

Pagination is a technique used to divide large datasets into smaller, manageable chunks (pages). This project demonstrates different pagination approaches, from simple offset-based pagination to deletion-resilient hypermedia pagination.

## Files

| File | Description |
|------|-------------|
| `0-simple_helper_function.py` | Contains `index_range` helper function that calculates start and end indexes for pagination |
| `1-simple_pagination.py` | Implements basic pagination with the `Server` class and `get_page` method |
| `2-hypermedia_pagination.py` | Extends pagination with hypermedia metadata (page info, navigation links) |
| `3-hypermedia_del_pagination.py` | Implements deletion-resilient pagination that handles missing/deleted records |
| `Popular_Baby_Names.csv` | Dataset containing 19,418 records of popular baby names |

## Requirements

- Python 3.7+
- CSV file handling
- Type annotations

## Tasks

### Task 0: Simple Helper Function
Write a function `index_range` that takes two integer arguments `page` and `page_size` and returns a tuple containing the start and end indexes for pagination.

**Example:**
```python
index_range(1, 7)  # Returns (0, 7)
index_range(3, 15)  # Returns (30, 45)
```

### Task 1: Simple Pagination
Implement the `Server` class with a `get_page` method that:
- Takes `page` (default 1) and `page_size` (default 10) as arguments
- Validates both arguments are integers greater than 0
- Returns the appropriate page of the dataset
- Returns an empty list if page is out of range

### Task 2: Hypermedia Pagination
Implement `get_hyper` method that returns a dictionary containing:
- `page_size`: length of the returned dataset page
- `page`: current page number
- `data`: the dataset page
- `next_page`: number of the next page (None if no next page)
- `prev_page`: number of the previous page (None if no previous page)
- `total_pages`: total number of pages in the dataset

### Task 3: Deletion-Resilient Hypermedia Pagination
Implement `get_hyper_index` method that ensures users don't miss items from the dataset when rows are removed between queries. Returns:
- `index`: current start index of the page
- `next_index`: next index to query
- `page_size`: current page size
- `data`: actual page of the dataset

## Usage

### Task 0
```bash
./0-main.py
```

### Task 1
```bash
./1-main.py
```

### Task 2
```bash
./2-main.py
```

### Task 3
```bash
./3-main.py
```

## Author

Created as part of the Holberton School Web Back-End curriculum.
