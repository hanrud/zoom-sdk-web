** NOTICE: In index.js there is an undocumented function generateSignature, we only use it here for quick prototyping and highly encourage you to generate this signature server side, you don't want to expose your API Key/Secret **

*Install Node.js/NPM if you don't have it*

1. Download/Clone the sample app from [GitHub](https://github.com/zoom/sample-app-web)

2. Navigate to the directory where you downloaded the sample app.
 - Open /js/index.js file and search for [YOUR_API_KEY](https://developer.zoom.us/me/#api) and YOUR_API_SECRET and replace with your own REST API Key and Secret.
 - Save the file.

3. Navigate back to the root of the project and run ```npm intall```
 - Once that is complete, this will install a node module called [http-server](https://www.npmjs.com/package/http-server).
 - In terminal run ```http-server``` and visit [http://127.0.0.1:8080](http://127.0.0.1:8080) in your browser. You should now be seeing the sample app UI

5. Go to your Zoom meeting client and start a meeting (web client cannot start a meeting, however only join an already running meeting).
 - Return to the sample app and enter a Name and the Meeting Number of the meeting you just started.
 - Click Join.