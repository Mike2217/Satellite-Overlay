# Project Overview

## Project Name

Satellite-Overlay

## Project Description

This React App will grab a users geolocation, post it to the air table, and then use a get request on both the air table and N2YO API, to find the nearest Starlink satellite to your location.



## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

## Component Hierarchy
Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "info": {
        "satname": "STARLINK-3141",
        "satid": 49459,
        "transactionscount": 1
    },
    "positions": [
        {
            "satlatitude": -14.7886417,
            "satlongitude": 101.84489557,
            "sataltitude": 352.87,
            "azimuth": 4.52,
            "elevation": -75.99,
            "ra": 27.94671141,
            "dec": -27.86686615,
            "timestamp": 1638454518,
            "eclipsed": true
        },
        {
            "satlatitude": -14.73686368,
            "satlongitude": 101.88263746,
            "sataltitude": 352.85,
            "azimuth": 4.44,
            "elevation": -75.97,
            "ra": 27.97255072,
            "dec": -27.84020828,
            "timestamp": 1638454519,
            "eclipsed": true
        }
    ]
}
```

### MVP/PostMVP

#### MVP 

The MVP on this project is to get the user geolocation, post it to the air table, then utilize Javascript logic to make a get request to the air table and the N2YO API, after that is complete, we will utilize Javascript to compare the users latitude and longitude with 1600 objects to see which one is closest to the user.

#### PostMVP  

The goal of the post mvp is to create a real time data overlay and tracking of all of the satellites on the web app, this will then be able to dynamically update the position of the satellites as well as the nearest one to the user.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|December 1| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|December 2| Project Approval | Incomplete
|December 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
