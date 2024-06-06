# JS DUKKAN

## Introduction
JS DUKKAN is a project that sets up a basic folder structure for a web application with frontend and backend directories. This guide will walk you through the steps to create the necessary folders, initialize npm, and set up a live server.

## Table of Contents
1. [Introduction](#introduction)
2. [Folder Structure](#folder-structure)
3. [Installation](#installation)
4. [Usage](#usage)

## Folder Structure
1. Create a root folder named `dukaan`.
2. Add `frontend` and `backend` directories to the `dukaan` folder.
3. Inside the `frontend` directory, create a `src` folder.
4. In the `frontend` directory, create an `index.html` file with a heading `dukaan`.

## Installation
1. Navigate to the `frontend` directory:
    ```sh
    cd dukaan/frontend
    ```
2. Run the following command to initialize npm:
    ```sh
    npm init
    ```
3. Install `live-server`:
    ```sh
    npm install live-server
    ```
4. Add the following command to the `scripts` section of `package.json` to start the live server:
    ```json
    "scripts": {
      "start": "live-server src --verbose"
    }
    ```

## Usage
1. To start the live server, run the following command in the `frontend` directory:
    ```sh
    npm start
    ```
This will start `live-server` and serve the content of the `src` folder.

---

Feel free to expand this README with additional sections like features, dependencies, and more as your project evolves.

