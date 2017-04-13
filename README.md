# Qiita Contributions Api

## Description

[Qiita API v2](https://qiita.com/api/v2/docs) does NOT support user-contributions officially.
This API scrapes user-contributions on Qiita.

```bash
$ curl https://us-central1-charismatic-web-161410.cloudfunctions.net/qiita-contributions-api?user=takeo-asai
```

```json
{
  "id": "takeo-asai",
  "contributions": "303"
}
```

## Test on Local Machine

[cloud-functions-emulator](https://github.com/GoogleCloudPlatform/cloud-functions-emulator) is needed for test on a local machine

```bash
$ functions start
$ functions deploy qiitaContributions --trigger-http
```

```bash
$ curl http://localhost:8010/qiitaContributions/us-central1/qiitaContributions?user=takeo-asai
```