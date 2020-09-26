## ChatApp

A two person chat App
- Send messages to this friend and see the replies in a messaging format.
- Chat history is auto scrollable
- The sent message echoes back to the sender

### Development
Configure env variables in `.env.development` file
```bash
npm install
npm run start
```
### Production
Configure env variables in `.env.production` file
```bash
npm run build
```
Prod build is generated in `build/` directory

### Tech stack used:
- React.js
- Redux
- WebSocket echo service like https://www.websocket.org/echo.html
