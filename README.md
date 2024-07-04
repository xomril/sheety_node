# Express.js Application README

## Description
This is a simple Node.js application using the Express framework and Axios for making HTTP requests. The application provides an interface to interact with a Google Sheet (or similar) via environment variables for the sheet URL.

## Prerequisites
- Node.js installed
- npm (Node Package Manager) installed
- A `.env` file with the following environment variable:
  - `SHEET` - URL to the Google Sheet or similar endpoint

## Installation

1. Clone the repository:

    ```sh
    git clone <repository_url>
    cd <repository_directory>
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your sheet URL:

    ```sh
    SHEET=<your_google_sheet_url>
    ```

## Usage

1. Start the server:

    ```sh
    npm start
    ```

   The server will run at `http://localhost:3000`.

2. Available Routes:

    - **Root Route (`/`)**
      
      This route fetches data from the sheet starting at row 1 and column 1.
      
      **Example:**
      
      ```sh
      curl http://localhost:3000/
      ```

    - **Update Route (`/update/:row/:col/:txt`)**
      
      This route updates a specific cell in the sheet with the provided text.
      
      **Parameters:**
      - `row` - The row number to update
      - `col` - The column number to update
      - `txt` - The text to insert into the specified cell
      
      **Example:**
      
      ```sh
      curl -X POST http://localhost:3000/update/2/3/Hello
      ```
      
## Notes
- Ensure the `.env` file is correctly configured with the `SHEET` URL.
- The application uses environment variables, so make sure to restart the server after any changes to the `.env` file.
