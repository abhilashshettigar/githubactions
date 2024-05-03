## Reviewer Instructions
If you are reviewing this submission, then you can do so in two ways

* Look at the changes in [this pull request](https://github.com/equalexperts-assignments/equal-experts-southwest-alternative-doorway-8c4b46eab338/pull/1)
* Browse the code on Github
    

## Getting Started:
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm should be installed on your machine. You can download and install them from [Node.js website](https://nodejs.org/).

### Installing

1. Clone the repository to your local machine:

```sh 
git clone https://github.com/EqualExperts-Assignments/equal-experts-southwest-alternative-doorway-8c4b46eab338.git
```

2. Navigate into the project directory:

```sh 
cd equal-experts-southwest-alternative-doorway-8c4b46eab338 
```

3. Install dependencies using npm:

```sh 
npm install
```


### Running the Application

To start the application locally without docker, run the following command:

```sh 
npm run start 
```

* The server will start running on http://localhost:3000 by default.

### Running Tests

Tests are written using Mocha and Chai. To run the tests, execute:

```sh 
npm test
```


### Docker Support

You can also run the application using Docker. First, build the Docker image:

```sh 
docker build . -t githubapp
```

Then run the docker container using below command

```sh 
docker run -p 8080:3000 -d --name nodegithubapp githubapp
```

- The application can also be run in a Docker container. Once the container is running, you can access the application at [localhost:8080](http://localhost:8080).





