# Hummdocs

## Setting up your environment

To get your mkdocs environment configured; install the following:
* python:
* mkdocs:

        pip install mkdocs

Note: you might need to ensure cinst, python, & pip are all in your path.

## Updating the documentation

The **humm**docs repository has all the documentation in markdown format. There is also a submodule to the **humm**.github.io GiHub pages repository, which is basically the **humm**docs repository transformed into static HTML for the web.

To update the documentation the following steps need to be done.

* clone the repository and cd into it

* There are 2 branches:

| branch name       |    description     |
|-------------------|--------------------|
| **master**        |    master branch for **humm** docs (https://docs.shophumm.com.au and https://docs.shophumm.co.nz) |
| developmnent      |    dev branch for **humm** docs |

Each branch contains both AU and NZ version at the same time.  
The differences are contained in the mkdocs config files (mkdocs-au.yml and mkdocs-nz.yml respectively).

## How to contribute

* You can create a branch for your changes.

        git checkout -b new-thing

* Make your changes to the documentation.
* Run the web-application locally:  

        #! for Australia:
        mkdocs serve --config-file mkdocs-au.yml

        #! for New Zealand:
        mkdocs serve --config-file mkdocs-nz.yml

* Commit your changes and push your branch back up to GitHub.
* Submit a PR.
* When the PR is merged into the "master" branch, the Appveyor build will automatically push the generated content up to the associated AWS S3 bucket. This will be effective for both AU and NZ.

* Shared attributes are defined in mkdocs-au.yml and mkdocs-nz.yml. For example, instead of using shophumm.com.au or shophumm.co.nz, please use %domain% instead
