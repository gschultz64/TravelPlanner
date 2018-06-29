# project2 - "Travel Website"

## Wire frames
## White Board Photos

## Adobe XD Files

# Day One
Researched and studied using the Google Maps API(s) - https://classroom.udacity.com/courses/ud864
Finalized structure of database models/tables
Created production, development and test databases, models, migrated tables to my project.
Have basic google maps functionality on my app - next steps will be to finish planning out layout and structure of app, store data from the api in my production database.

# Day Two
Planned layout of web site pages
Completed wire frames and prototyping in Adobe XD - https://xd.adobe.com/view/09f60442-19ed-4bcd-69bc-4350ce2dbeaf-7fc7/

# Day Three
Planned site structure a bit more, which helped me realize I could combine some pages from my wire frames. Worked on some routes, wrote model associations, added more styling to site layout. Decided not to use express-ejs-layouts, doing header and footer in the partials folder so I can be more flexible with the site layout.

# Day Four
Google maps api is functioning on trips/new page (add new trip), using places, geometry and drawing tools. Can create a new trip and store to database.
Realized I need to have a user id on the trip model, so I removed the association b/t trip and user until I get that implemented.

# Day Five
TODO: Finish stuff! Stretch features?
- Use google api place photo for landing page?
maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=idfromplace_idobject&key=<%process.env.KEY%>

# Weekend (Days Six/Seven)
TODO: Style the site more, finish whatever is left, work on stretch features
