


# sprite_test

## How to Use

To run the tests, you will need to download or clone the project. You can use the following command to clone the repository:

```shell
git clone https://github.com/felipehsoliveira/sprite_test.git
```

If the above command does not work, you can also download the project as a ZIP file by clicking the "Download ZIP" button, as shown below:

![Download ZIP](https://github.com/felipehsoliveira/sprite_test/assets/21012770/d05a9247-5d4a-4cc8-b122-c2af91ec90a0)

After downloading, navigate to the project folder. Once inside the project folder, access the project's root directory and install the necessary packages for running the tests using the following command:

```shell
npm install
```

Please note that for the project to work correctly, you must have the latest LTS version of Node.js installed on your device. If you don't have Node.js installed, please follow the steps outlined in the following link: [Node.js Download and Installation](https://nodejs.org/en/download/package-manager).

## Running the Tests

To execute the test scenarios, use the following command in your terminal:

```shell
npx playwright test
```

To run the scenarios in UI mode, use the following command:

```shell
npx playwright test --ui
```

### Local GitHub Actions Execution:

This project is configured with GitHub Actions workflows. If you want to simulate the GitHub Actions environment locally, you can use the "act" tool. Follow the instructions provided in the following project link to set up and use "act": [nektos/act](https://github.com/nektos/act).

## Test Automation Strategy

The choice and automation of test scenarios were made with the following considerations:

For E2E (End-to-End) scenarios, common situations were considered, such as:

- Delayed loading of elements or pages.
- Interaction with pop-ups or alerts.
- Elements with changing IDs or elements that change without notice.

For API scenarios, the user API was selected to represent common real-world situations. The main HTTP methods for CRUD operations (POST, GET, PUT, and DELETE) were used to validate the functionality.



