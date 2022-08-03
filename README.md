## Firebase secrets

This repo branches showcase different use case for a Firebase projects configurations. Some cases do not detects secrets that should be accessible inside functions

### main
The default typescript project. When running `firebase deploy` the validation phase detects the missing secrets

```terminal
Error: Failed to validate secret versions:
- FirebaseError HTTP Error: 404, Secret [projects/1003497145845/secrets/API_KEY] not found or has no versions.
```