"use strict";

const quotes = (items) =>{
  items = [
    " 'All of those moments will be lost in time, like tears in rain.' - Roy Batty",
    " 'On the run from Johnny Law....ain't no trip to Cleveland.' - Dignan",
    " 'To be born is to have a soul, I guess.' - Officer K",
    " 'Forget it, Jake. It's Chinatown...' -A guy in Chinatown",
    " 'Toto, I have a feeling we're not in Kansas anymore.' -Dorothy",
    " 'May the force be with you...' -Han Solo",
    " 'I'll make him an offer he can't refuse.' -The Godfather",
    " 'Open the pod bay doors, HAL.' -some guy from 2001: A Space Odyssey",
    " 'Rosebud' -Citizen Kane",
    " 'It's true, it IS a wonderful life!' -George Bailey",
    " 'We'll always have Paris.' -Rick in Casablanca",
    " 'She just reached in and put a string of lights around my heart.' -Cay",
    " 'Here we go, this is gonna be a real Star Trek.' -Spock",
    " 'I almost can't believe my eyes, but there it is: Harry Potter and the Chamber of Secrets' -Hermione"
  ];
  return items[Math.floor(Math.random() * items.length)];
};

module.exports = quotes;
