"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playground = void 0;
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.playground = functions
    .region("europe-west1")
    .runWith({
    maxInstances: 1,
    secrets: ["API_KEY"],
})
    .https.onRequest((req, res) => {
    const apiKey = process.env.API_KEY;
    functions.logger.info("Not so sensible API Key", apiKey);
    res.status(200).json({ apiKey });
});
//# sourceMappingURL=index.js.map