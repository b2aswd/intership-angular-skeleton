# Intership Angular Skeleton

## Project setup

-   [NodeJS 14](https://nodejs.org/en/)
-   https://desktop.github.com/
-   git clone git@github.com:b2aswd/intership-angular-skeleton.git
-   npm install
-   [VS Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/)
-   VS Code plugins
    -   [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)
    -   [Prettier - Code formattern](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    -   [Angular DevTools](https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh)
    -   [Angular ESLint](https://github.com/angular-eslint/angular-eslint)

## Handly tools and libraries

-   [RxJS: Reactive Extensions Library for JavaScript](https://rxjs.dev/)
-   NGRX: Reactive State for Angular
    -   [@ngrx/store](https://ngrx.io/guide/store)
    -   [@ngrx/component-store](https://ngrx.io/guide/component-store)
-   [MQTT: The Standard for IoT Messaging](https://github.com/sclausen/ngx-mqtt)

## Task

-   https://b2aswd.atlassian.net/wiki/spaces/~903084672/pages/3072327703/St+e+-+Simple+Messenger+Backend

### 1. Chatroom

-   List of chat rooms `GET:{{url}}/api/v1/chat-room`
    -   Create a new chat room from the list `POST:{{url}}/api/v1/chat-room`
-   ChatRoom `GET:{{url}}/api/v1/chat-room/:id`
    -   List of messeges in the chat room (ChatRoom/Message)
    -   Update chat room `PUT:{{url}}/api/v1/chat-room/:id`
    -   Delete chat room `DELETE:{{url}}/api/v1/chat-room/:id`
    -   Optionally you can add MQTT - subscribe to a chatroom topic `chat-room/:id`

### 2. Users

-   List of users (skeleton already contains simple list of users)
    -   Crete a new user from the list
        -   After creation, the user is visible in the list
-   User detail
    -   Basic user information
    -   Actions: edit, remove
    -   After an action is done, list of users is displayed
