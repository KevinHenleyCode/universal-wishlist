# Universal Wishlist

<br>

## Overview

The **Universal Wishlist** is a web application designed to help users easily track and manage books they wish to acquire from various online sources. Initially integrated with the Folio Society's catalog, it will later include additional sources such as the Google Book's API.

<br>

## Current State

### **Alpha Version**

<br>

## Features

### Current Features

- **Folio Society Integration:**
  - Fetches detailed information about Folio Society books, including their current stock.
  - Stores retrieved book information in a local SQLite database to avoid unnecessary API calls.

### Planned Features

- **Automatic Quantity Updates:** Automatically refresh book stock information when the page loads.
- **User Wishlist:** Allow users to create and maintain personalized wishlists.
- **Clean up UI:** Overhaul UI so it looks more appealing and responsive.
- **Data Translation:** Transform identifiers (Authors, Illustrators, Introducers) from their coded IDs into easily readable formats.
- **Local Image Storage:** Enable downloading and saving book images locally, to have a visual representation of each book.

- **Expanded Book Catalog:** Integrate with the Google Book's API for extended book catalog.
- **Ai integration:** Be able to ask ChatGPT to give you suggestions based on fields like, (Genre, Author, Series)

<br>

## Tech Stack

- **Frontend:** Next.js 15, Tailwind CSS

- **Backend:** Prisma ORM

- **Database:** SQLite

<br>

## Installation and Setup

### 1. Clone the Repository:

```bash
git clone git@github.com:KevinHenleyCode/universal-wishlist.git

cd universal-wishlist
```

### 2. Install Dependencies:

```bash
npm install
```

### 3. Database Initialization and Prisma Client Generation:

```bash
npm run migrate-generate-db
```

### 4. Run App:

```bash
npm run dev
```

<br>

## Environment Variables

### Create a .env file in the project's root directory with the following variables:

```bash
FOLIO_SOCIETY_API_URL='https://www.foliosociety.com/usa/api/n/load?type='
DATABASE_URL='file:./db/books.db'
```

<br>

## Usage

- Initial Data Load:
  - Visit the /books page of the application.

  - Click **ADD TO DB** to fetch the latest book details from the Folio Society API and store them locally.

<br>

> Note: Please use the **ADD TO DB** button responsibly, as each click retrieves the complete set of Product and Stock data from the Folio Society's API.
