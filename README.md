## Instructions
Tha SPA was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Download and unzip the archived file or clone the [github repository](https://github.com/pixelume/offerzen-tech-challenge). After unzipping or cloning, run npm install to install the dependancies. I did deploy the finished SPA [here on Netlify](https://zen-panini-eb6e2b.netlify.app/) if you want to demo it.


## Notes and thoughts on the assignment

 - Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 - The finished SPA is deployed [here on Netlify](https://zen-panini-eb6e2b.netlify.app/).
 - I also added a [github repo](https://github.com/pixelume/offerzen-tech-challenge) with the code
 - I used Styled Components for styling as that is what I'm most familiar with.
 - I tried to structure the the app and component tree in a logical, intuitive manner. There is a components folder with all the composite components, a data folder with my json file which gets imported into the App.js file, an images folder and styles/shared folder where I have some styles that are used in multiple components.
 - I did not use the same font as in your Figma mockups because is is a commercial font. I swopped it out for Montserrat which is very similar.
 - The page is fully mobile responsive.
 - Although not specified in the technical assignment tasks, I can see from the mockups that theres the functionality to order the entries by the last communication date. I implemented this as well as the ability to sort the entries on any column in ascending or descending order by clicking on the column heading.
 - I also implemented the unread status indicator in the Last communication entries as shown in the mockups.
 - The *Search* input as well as the *Show archived* checkbox are controlled components.

## Task D - Questions
**How long did this assignment take you and where did you spend your time?**
To implement the core functionality as per the assignment tasks descriptions was +/- 4 hours. I did however spend additional time iterating over it to tweak the styling and implement additional functionality such as the ability to sort on any of the columns in ascending or descending order.

**What would you do differently or improve in your solution?**
I'm pretty happy with my solution and I did make a number of improvements after initially coding it including the sorting functionality and the unread status indicator. I considered using the useContext hook as opposed to passing props down directly, but it is such a simple app with the component tree no more than two levels deep so I decided not to use it.

**Do you have any feedback on this assignment? For example: What did you enjoy? What could be better? Which aspects were unclear?**
I loved the assignment. I like that I got a little bit of practice on presenting data in a table format that can be sorted on any of the fields. What I possibly could do better is to break up my TableComponent.js component into two components to separate the logic from the presentation as the component has a lot of both at the moment. 