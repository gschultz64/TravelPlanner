# project2 - "Travel Website"

## Wire frames
## White Board Photos
- Add photos here
## Adobe XD Files
- Add wireframe file(s) here

# Day One
Researched and studied using the Google Maps API(s) - https://classroom.udacity.com/courses/ud864
Finalized structure of database models/tables
Created production, development and test databases, models, migrated tables to my project.
Have basic google maps functionality on my app - next steps will be to finish planning out layout and structure of app, store data from the api in my production database.

# Day Two
Planned layout of web site pages
Completed wire frames and prototyping in Adobe XD - https://xd.adobe.com/view/09f60442-19ed-4bcd-69bc-4350ce2dbeaf-7fc7/

# RESTful Routes
┌────────┬──────────────────────┐
│ Method │ Path                 │
├────────┼──────────────────────┤
│ GET    │ /                    │
├────────┼──────────────────────┤
│ GET    │ /auth/signup         │
├────────┼──────────────────────┤
│ GET    │ /auth/login          │
├────────┼──────────────────────┤
│ POST   │ /auth/signup         │
├────────┼──────────────────────┤
│ POST   │ /auth/login          │
├────────┼──────────────────────┤
│ GET    │ /auth/logout         │
├────────┼──────────────────────┤
│ GET    │ /trips               │
├────────┼──────────────────────┤
│ GET    │ /trips/new           │
├────────┼──────────────────────┤
│ GET    │ /trips/:id           │
├────────┼──────────────────────┤
│ GET    │ /trips/:id/locations │
├────────┼──────────────────────┤
│ GET    │ /trips/:id/edit      │
├────────┼──────────────────────┤
│ PUT    │ /trips/:id           │
├────────┼──────────────────────┤
│ POST   │ /trips               │
├────────┼──────────────────────┤
│ POST   │ /trips/:id           │
├────────┼──────────────────────┤
│ DELETE │ /trips/:id           │
├────────┼──────────────────────┤
│ GET    │ /profile             │
└────────┴──────────────────────┘

# Day Three
Planned site structure a bit more, which helped me realize I could combine some pages from my wire frames. Worked on some routes, wrote model associations, added more styling to site layout. Decided not to use express-ejs-layouts, doing header and footer in the partials folder so I can be more flexible with the site layout.

# Day Four
Google maps api is functioning on trips/new page (add new trip), using places, geometry and drawing tools. Can create a new trip and store to database.
Realized I need to have a user id on the trip model, so I removed the association b/t trip and user until I get that implemented.

# Day Five
Worked more on using the google maps api places library, so the user can search for a specific place or a group of places in a certain area. Saved trips all display properly and can be deleted. I wanted to be at MVP by the end of Friday, but wasn't able to get there.

# Weekend (Days Six/Seven)
I was hoping to be able to do more styling and add more features to the site over the weekend, but was still getting the site to MVP on Saturday and Sunday. I actually ran into problems on Sunday when trying to re-do a couple of my models with Sequelize. This ate up a lot of time and threw off my plan for what I could complete. Deploying to Heroku was also giving me trouble, so I have yet to finish that aspect of the project. 

# What I Want to Do
- Finish deploying the site on Heroku
- Improve the session
- Finish styling the site
- Get randomly generated photos for the landing page instead of kittens.
- Use the dates provided on a trip to generate a calendar of all upcoming trips
- Add account features: like changing password, adding/changing/removing a profile picture, being able to view other users' trips and profile
