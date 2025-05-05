# week01-assignment

A splash page.

# Basic requirements

## User stories

🐿️ As a user, I want the web page to have a clear structure with a recognisable header, footer, and navigation sections, so that I can easily navigate and understand the content.
🐿️ As a user, I want the layout and navigation links to be responsive and well-organised, so that I can easily access and interact with the website.
🐿️ As a user, I want to see text overlaid on images or other elements in a visually appealing way, so that the content is engaging and enhances my browsing experience.
🐿️ As a user, I want images to load correctly and be displayed properly on the web page, so that my viewing experience is seamless and visually pleasing.

## Requirements

🎯 Ensure each section of the webpage is wrapped in the correct semantic tags, ensuring that includes a <header>, <nav>, and <footer>.
🎯 Implement CSS absolute positioning to overlay text on an image or another element.
🎯 Utilise CSS Flexbox to create a flexible and responsive layout, particularly in the <nav> element.
🎯 Ensure all image elements (<img>) are correctly implemented with accurate src file paths.

## 🎯 What requirements did I achieve?

This week, I was able to achieve all the minimum requirements for this project:

- I created a wireframe and a high fidelity design and was able to translate this into code using the correct tags for each section
- I used CSS absolute positioning to place different illustrations on different parts of the page, as well as some favourite buttons for the products in the shop section
- I created a flexible layout using flexbox, with a clear navbar and wrapping elements across the whole site.
- I included several images, all of the correctly implemted and functioning.

# Stretch Goals

## Stretch User Stories

🐿️ As a user, I want to have a “back to top” button so that I can easily return to the top without manually scrolling.
🐿️ As a user, I want smooth scrolling for internal links so that I can have a seamless and enjoyable navigation experience within the website.
🐿️ As a user, I want buttons to have a hover effect so that they appear more interactive and I can easily identify clickable elements.
🐿️ As a user, I want a basic footer with social media icons that link to social media pages so that I can easily connect with the website on social platforms.
🐿️ As a user, I want a background music track that plays automatically when the website loads so that I can have an enhanced and enjoyable browsing experience.

## Stretch Requirements

🏹 Create a “back to top” button.
🏹 Implement smooth scrolling for internal links to improve user experience.
🏹 Implement a hover effect on buttons to make them more interactive.
🏹 Create a basic footer with social media icons that link to social media pages.
🏹 Add a background music track that plays automatically when the website loads.

## 🎯 What requirements did I achieve?

This week, I was able to achieve all the stretch requirements for this project and included some more:

- I created a back to top button
- I implemented smooth scrolling
- All my links and buttons have a hover effect for better UX
- I created a footer with basci social media icons that link to its respective pages.
- I added a background music track. I hid the player because I did not like the way it looked on the page, but added a play and pause buttons to the navbar

## Some extras

- I designed a website for with project
- I used JS to give the Shop now button on the hero section functionality.
- I used JS to make the favourite buttons work. The heart icon can be clicked and unclicked.
- I used CSS to add a hover effect to the heart icons
- I installed the Google font "Sora" to use on my page
- I installed fontawesome icons
- I used svgs as well to show 2 ways of doing this.
- I added a background image to the footer, to achieve a similar look to the different sections of the example page provided in this assigment
- Finally I followed the instructions for this week's lesson: Interaction with Audio and Video Elements. And added my own audio player using Javascript

## Problems encountered

For some reason my audio did not work when I pushed the project to github even though I even corrected the path to look like:

from:

/files/rainy-lofi-city-lofi-music-332746.mp3

to:

/week01-assignment/files/rainy-lofi-city-lofi-music-332746.mp3"

I also tried

https://github.com/elena-lpz/week01-assignment/blob/main/files/rainy-lofi-city-lofi-music-332746.mp3?raw=true

and finally I tried taking the file out of the folder and linking it like

/rainy-lofi-city-lofi-music-332746.mp3"

Unfortunately, none of these worked and I would like to know why. It did seem to work when I unhid the controls using devt tools, but I did not want them to show.

UPDATE: Leaving all of this in for clarity, but apparetly Github was messing with me yesterday because I reverted it back to my original path and today it works. Fun times.

## Wireframe and Figma design

[Figma design] (https://www.figma.com/proto/eiwXmSbJpLWLxW4Th8vR3I/Untitled?node-id=1-2&t=fHtLFYD2NH1oyWAC-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

[Wireframe] (https://github.com/elena-lpz/week01-assignment/blob/96ce67a2aa6cc33282ddfa0961e04c187b249ce4/files/Wireframe%20(3).png)

# References and resources

- ChatGPT for copy
- Illustrations from: https://getillustrations.com/illustration-pack/color-app-free-icons
- Audio from https://pixabay.com/music/search/lofi/
- Images from [Pixabay](https://pixabay.com/) and https://unsplash.com/
- Icons from https://fontawesome.com/
- Logo from https://www.canva.com/

## JavaScript

### Scroll to section

https://www.w3schools.com/jsref/met_element_scrollintoview.asp
https://www.w3schools.com/jsref/met_win_scrollto.asp

### Favourite buttons

With help from https://www.shecodes.io/athena/9423-change-the-class-name-of-an-html-element-with-javascript#:~:text=Access%20the%20classList%20property%20of,with%20the%20new%20class%20name.
and https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

## Author: Elena
