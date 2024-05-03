 ## :warning: Please read these instructions carefully and entirely first
* Clone this repository to your local machine.
* Use your IDE of choice to complete the assignment.
* When you have completed the assignment, you need to  push your code to this repository and [mark the assignment as completed by clicking here](https://app.snapcode.review/submission_links/ce0fb3e6-bd8c-45a0-bd86-cf8d38b9703e).
* Once you mark it as completed, your access to this repository will be revoked. Please make sure that you have completed the assignment and pushed all code from your local machine to this repository before you click the link.
* Welcome to the start of our recruitment process for Operability Engineers. It was great to speak to you regarding an opportunity to join the Equal Experts network!

**Table of Contents**
1. [Before you start](#before-you-start), a brief explanation for the exercise and software prerequisites/setup.  
2. [Submission Guidelines](#submission-guidelines) provides clear guidance on solution qualities we value 
3. [The Challenge](#the-challenge) explains the code challenge

## Before you start
### Why complete this task?

We want to make the interview process as simple and stress-free as possible. That’s why we ask you to complete 
the first stage of the process from the comfort of your own home.

Your submission will help us to learn about your skills and approach. If we think you’re a good fit, we’ll use your submission in the next interview stages too.

### About the task

You’ll be creating an api that gets Github user gists using the Github api and package it into a docker container.

There’s no time limit for this task, but we expect it to be around 90 minutes.

### Software prerequisites
To make it really easy for candidates to do this exercise regardless of their operating system, we've provided a containerised
way to run the exercise. To make use of this, you'll need to have [Docker](https://www.docker.com/products/docker-desktop/) (or a free equivalent like [Rancher](https://rancherdesktop.io/) or [Colima](https://github.com/abiosoft/colima)) installed
on your system.

### Submission Guidelines

1. **Do**

   * ✅ Take the time to read any applicable API or service docs, it may save you significant effort.

   * ✅ Provide a README file in text or Markdown format that documents a concise way to set up and run the provided solution
   
   * ✅ Prefer simple, well tested solutions over clever solutions

2. **Don't**

   * ❌  Install software globally that may conflict with system software
   
   * ❌  Provide overly complex solutions that need to spin up a ton of unneeded supporting dependencies. (We aspire to keep our dev experiences as simple as possible)
   
   * ❌  Include identifying information in your submission. We are endeavouring to make our review process anonymous to reduce bias


### The Challenge

**Build an API, test it, and package it into a container**

- [ ] Build a simple HTTP API in any general purpose programming language that interacts with the [GitHub API](https://docs.github.com/en/rest/gists/gists#list-public-gists) and responds to requests on /<USER> with a complete list of the user’s publicly available Gists.

- [ ] Create an automated test to validate that the API works. An example user to use as test data is `octocat`.

- [ ] Package the API into a docker container that listens for requests on port `8080`.


**Note: You do not need to publish the container image in any container registry. We just expect a Dockerfile**


All the best!








