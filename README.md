# Feed Reader Testing

This is my 8th project in the Udacity Front-End Web Developer Nanodegree Program.

## Getting started

- Download the repository.
- Open `index.html`

![screenshot](https://github.com/beroXD/P8-Feedreader-Master/blob/master/screencapture.png)

### This test contains 4 suite and 8 specs.

### First suite `RSS Feeds`

- Fist spec `are defined`, test the allFeeds array if it is defined and not empty.
- Second and third spec `feed has URL` `feed has name`, loops though the allFeed objects and test if the URL and name are defined and not empty.

### Second suite `the menu`

- First spec `menu hidden by default`, test that the menu element is hidden by default.
- Second and third spec `icon clicked` `icon clicked again`, test if the icon is clicked for the first time then the menu will be visible. And if icon is clicked again, the menu will be hidden.

### Third suite `Initial Entries`

- spec `feed has at least a single entry`, test that the RSS feed has at least one entry.

### Forth suite `New Feed Selection`

- spec `load new content`, test ensures that the content of the RSS feed will actuly change when new content is loaded.

## Resources

[Jasmine js](https://jasmine.github.io/2.0/introduction.html)

[jasmine-jquery](https://github.com/velesin/jasmine-jquery)

[How do I Jasmine: a tutorial](http://evanhahn.com/how-do-i-jasmine/)

[Udacity discussion forum]()
