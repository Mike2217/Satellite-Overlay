# Project Overview

## Project Name

Satellite-Overlay

## Project Description

This React App will grab a users geolocation, post it to the air table, and then use a get request on both the air table and N2YO API, to find the nearest Starlink satellite to your location.

<img width="417" alt="Screen Shot 2021-12-02 at 10 08 49 AM" src="https://user-images.githubusercontent.com/92862291/144449813-62f3d7ed-ca11-43c0-ada0-9be904bb70e9.png">

## Wireframes

<img width="690" alt="Screen Shot 2021-12-02 at 10 18 56 AM" src="https://user-images.githubusercontent.com/92862291/144450669-97d668aa-e83b-4b99-8357-bc2a57d19171.png">

<img width="174" alt="Screen Shot 2021-12-02 at 10 20 28 AM" src="https://user-images.githubusercontent.com/92862291/144450698-bdfeb360-5731-4b8f-870b-cfa92a2fc613.png">

## Component Hierarchy

<img width="362" alt="Screen Shot 2021-12-02 at 2 46 41 PM" src="https://user-images.githubusercontent.com/92862291/144492395-eb9db6f1-4b17-43ed-867f-8c78e1fc6926.png">

## API and Data Sample


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


|  Day | Deliverable | Status
|---|---| ---|
|December 1| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|December 2| Project Approval | Incomplete
|December 2-5| Get/Post Javascript Logic | Incomplete
|December 6| Styling | Incomplete
|December 7| Finsih MVP  | Incomplete
|December 8-9| POST MVP  | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| GET/POST Request | H | 3hrs| N/A | N/A |
| Adding Components | H | 6hrs| N/A | N/A |
| Javascript Algorithms | H | 8hrs| N/A | N/A |
| Javascript Compare | H | 5hrs| N/A | N/A |
| STYLING | M | 4hrs| N/A | N/A |
| POST MVP C3 | L | 5hrs | N/A | N/A |
| POST MVP JAVASCRIPT COMPARE | L | 8hrs | N/A | N/A |
| POST MVP JAVASCRIPT DISPLAY | L | 6hrs | N/A | N/A |
| Total | H | 51hrs| N/A | N/A |

## SWOT Analysis

### Strengths: I think I may be overestimating my time required to finish the Javascript

### Weaknesses: I will have a difficult time with the components

### Opportunities: Trying to push myself in this project, with that comes great learning opportunities. Especially with the Post-MVP

### Threats: I think I have a pretty clear plan, but I'm worried I will encounter something that is much more difficult than I had originally expected.
