- dependency
```json
{
  "@typescript-eslint/eslint-plugin": "^5.53.0",
  "@typescript-eslint/parser": "^5.53.0",
  "eslint": "^8.35.0",
  "eslint-plugin-security": "^1.7.1",
  "@types/node": "^18.14.2",
  "nodemon": "^2.0.20",
  "ts-node": "^10.9.1",
  "typescript": "5.0.0-dev.20230226"
}
```
### create repository
```shell
rm -rf .git
curl -H "Authorization: token YOUR_ACCESS_TOKEN" https://api.github.com/user/repos -d '{"name":"YOUR_REPOSITORY_NAME", "private": true}'
```
