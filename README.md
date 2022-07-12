# Roomz - Video Conference App

Roomz is a New, Easy to use and Featurefull Video Calling App For All! It is made using Node.js and uses tech like Socket.io and PeerJS for video call, chat and an interactive whiteboard.

  - Create new Video conference and share it's Room ID.
  - Use Room ID to join meetings fast and quick.
  - Implemeted Video Calling Feature.
  - Implemented login and signup features using Passport.
  - Implemented Interactive Whiteboard
  - Implemented Peer to Peer Live chat service within a meeting.

### Tech

Roomz uses a number of open source projects to work properly:

* [Passport] - a Express-compatible authentication middleware for Node.js.
* [Node.js] - evented I/O for the backend.
* [Express] - fast node.js network app framework.
* [PeerJS] - implementation to provide a complete, configurable, and easy-to-use peer-to-peer connection API.
* [Socket.io] - enables real-time bidirectional event-based communication.
* html, css, js

And of course Interview Tracker itself is open source with a [public repository][repo]
on GitHub.

### Setting up

1. Install node.js
2. Open Interview Tracker using an editor like VS code.
3. Install the dependencies and devDependencies.
4. Run Node server as well as peerJS server in seperate terminals
5. Run the website at http://localhost:8000/

```sh
$ npm install
$ node server.js
$ peerjs --port 8001
```

### Landing Page

![Landing Page](https://imgur.com/B5q2la5.jpg)

This is the first page you'll see when you open the website. Here you can signup, login or see the features and testimonials of the website. 
Here the 'Join or Create a Room Now' page requires a valid logged in user. If you try to open this without logging in, you'll be directed to the login page.
After you've logged in the nav bar will show you, your username.

### Login/Signup

![login](https://imgur.com/upt4aeA.jpg)
![signup](https://imgur.com/BmyYDsh.jpg)

In this page you signup for a new account or login to a existing one. These pagese will give an error when we leave a field blank or make invalid inputs in the fields and then attempt to submit.

For login, the website will check if the email and password matches, or if the account asscoiated with the email exists or not. The signup page will check if the email id is in the correct form.

### Meetings Management

![manage](https://imgur.com/YUk7FbI.jpg)

Here you can manage your meetings. You can start a new conference room by clicking on the 'New Meeting' button. You can also join another ongoing meeting using a valid code
by typing/pasting the room ID inside the right hand side field and then clicking the 'Join Meeting' button.

### Inside A Conference Room

![inMeet](https://imgur.com/IWBEG6E.jpg)

This is how the conference room will look like. New attedees will be added to the right side column. Many additional features/options are given to you at the bottom. 
You may open chat window, leave the call, toggle on or off your video feed, or start using a interactive live whiteboard. You are also provided the room ID at the
bottom left which you can share to the atendees.

### Features

![features](https://imgur.com/YXVMDSc.jpg)

Roomz provides very useful and important features like live chat, and an interactive whiteboard.

### About us

![aboutus](https://imgur.com/ovQMYOq.jpg)

This page contain information about the people who have made this website.

### Page Not Found

![pageNotFound](https://imgur.com/FLt3JsK.jpg)

This page is displayed when you go to an invalid page.

   [repo]: <https://github.com/RKSM-GIT/Roomz>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [passport]: <https://www.npmjs.com/package/passport>
   [PeerJS]: <https://peerjs.com/>
   [Socket.io]: <https://www.npmjs.com/package/socket.io>
