# Udacity ND001 Front-end web development
## P6: Feed Reader Testing

### Running instructions

Here are some useful tips to help run the app:

#### Desktop

Open index.html to access the feed reader app. The Jasmine test environment is appended to the bottom of the page so all the features are loaded automatically after index.html has been opened. For an overview of the applied tests have a look below.

#### Mobile

1. To inspect the site on a phone, download the repository and run a local server

  ```bash
  $> cd /path/to/project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080

### Features
* Check for URL and name definition of each feed (therefore a test loops through each feed).
* Check that the menu is hidden by default and that it changes visibility upon clicking the menu icon (therefore the class declaration of the body element is checked at initialization and after issuing a click event).
* Check if at least one entry is passed into the feed-container and if the content actually changes (therefore calling the loadFeed function before each test in order to take into account the asynchronous request).