# Is Node.js Really Single-Threaded?

### Node.js Front-end Community Code and Presentation materials

To run application execute commands:

    $ npm install
    $ npm start

There is a JMeter test plan prepared and exported to `Threads Test.jmx`. It allows to investigate how multi-threading works and how server handles multiple request.

Following endpoints are implemented:

- /block-thread
- /async
- /crypto-libuv

Each endpoint is handled by corresponding function from **routeHandlers** folder.
