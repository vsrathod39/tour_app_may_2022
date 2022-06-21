
# [TourInfo](https://tourinfo.vercel.app/)

TourInfo is a social media web app that lets users share their experiences of a place they visited or add information about the places to help other travelers. Visitors can share their experiences by posting the details and comments on shared posts. One can also like the shared posts.

It is a non-commercial, non-profitable project with the purpose to provide information about differem places. Made for the hand of experience on web-app development-related technology.

## Acknowledgements

 - Thanks to [CodeWithVisha](https://www.youtube.com/channel/UC_ax8-CBuZ3ltn8x69Di4MA) for their informative content.

## Tech Stack

**Client:** React, Redux, Material Design Bootstrap

**Server:** Node.js, Express.js, jsonwebtoken(JWT), Mongoose

**Database:** MongoDB

## Deployment

- Heroku: Backend (server)
- Vercel: Frontend (client)

## API Reference

#### Development server: http://localhost:5000
#### Production server: https://tourinfo.herokuapp.com/

## API End Points

#### Open Routes
- /users/signup -->  --> New user registration
- /users/signin --> Signing-in existing user
- /tours --> Method: get --> Fetching all available tours details
- /tours/search --> Method: get --> Searching a post by title
- /tours/tag/:tag --> Method: get --> Fetching matched posts with tags
- /tours/relatedtours --> Method: post --> Fetching related posts for recomendation
- /tours/:id --> Method: get --> Frtching a specific post
- 
### Protected Routes
- /tours/usertours/:id --> Method: get --> Dashboard endpoint for fetching tours added by registered user only
- /tours --> Method: post --> Adding a new post by registered user only
- /tours/:id --> Method: delete --> Deleting a post added by registered user only
- /tours/:id --> Method: patch --> Updating a post added by registered user only
- /tours/like/:id --> Method: patch --> Like and un-like a shared post

## Features

#### CRUD feature are implemented with above mentioned tech stacks.

- User authentication
- Adding a new post
- Editing/updating a shared post
- Like and un-like on the shared posts
- Comments feture on the shared posts. --> Thanks to [Disqus](https://disqus.com/) for their comment hosting service.
- Recomendation based on clicked post's tag.
- Searching a specific post


## Demo

**Demo video:** Update Soon


## Screenshots

#### Home


#### Details & Recomendation

![Recomendation](https://user-images.githubusercontent.com/91534659/174782970-a650f761-f3d7-42b9-b6ae-7e0f8920d848.png)

#### Discussion

![Discussion](https://user-images.githubusercontent.com/91534659/174783038-9726e601-e2c6-4aa3-8ad7-0dfc73cc605a.png)

#### Dashboard


## Lessons Learned

While working on this project, I got to know about state management using redux while developing react app. I learned about React functionality and MDB components.I also got to know about Backend development with help of Node.js, express.js, JWT, and other NPM packages.

#### Challenges faced: 

I found managing states in react is really difficult. I filled tricky in configuring and using middlewares while developing the backend (server).

## Authors

- [@Vikas Kumar](https://github.com/vsrathod39)
- I would like to mention the CodeWithVishal youtube channel for its informative videos.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vikas.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vikas-kumar39/)


## FAQ

#### What is TourInfo?

It is a non-commercial, non-profitable project with the purpose to provide information about visiting placess. Made for the hand of experience on web-app development-related technology.

#### Is this a clone of another app or the design is copied?

No, It is not a clone. However, I had taken the help of various online resources, specialy from CodeWithVishal youtube channel while making this web app.

### From where it is getting data?

I have not used any third-party API service. For all the CRUD operations, I have used MongoDB, Express.js, Node.Js, and other NPM packages and built a backend server that is deployed on Heroku.

### How to use this web app?

Please visit https://tourinfo.vercel.app/ and give it a try. For any query please send it to below mention email id.


## Feedback

If you have any feedback, please reach out to me at vsrathod39@gmail.com
