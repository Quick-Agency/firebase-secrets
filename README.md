## Firebase secrets

This repo branches showcase different use case for a Firebase projects configurations. Some cases do not detects secrets that should be accessible inside functions

### main
The default typescript project. When running `firebase deploy` the validation phase detects the missing secrets

```terminal
Error: Failed to validate secret versions:
- FirebaseError HTTP Error: 404, Secret [projects/1003497145845/secrets/API_KEY] not found or has no versions.
```

### with-subfolder
In this branch the build is placed in a different folder that include a simple package.json with the minimum requirements.

This use case car be found in a monorepo where internal package are bundled before deploying to firebase


```terminal
✔  functions[playground(europe-west1)] Successful create operation.
Function URL (playground(europe-west1)): https://europe-west1-firebase-secrets-2.cloudfunctions.net/playground
```