# 포트폴리오 사이트

빌드 도구 없이 동작하는 순수 HTML / CSS / JS 포트폴리오입니다. GitHub Pages에 그대로 올리면 됩니다.

## 내용 수정하기

- **모든 내용**은 [js/data.js](js/data.js) 한 파일에서 수정합니다. `[TODO]` 표시를 찾아 바꾸세요.
- 프로필 사진: `assets/img/profile.jpg` 로 넣고 `data.js` 의 `photo` 값에 경로를 적습니다.
- 이력서 PDF: `assets/files/resume.pdf` 로 넣고 `resume` 값에 경로를 적습니다.
- 색상 변경: [css/style.css](css/style.css) 맨 위 `:root` 변수만 바꾸면 됩니다.

## 로컬에서 미리보기

폴더에서 `index.html` 을 더블클릭해도 열립니다. 또는 터미널에서:

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## GitHub Pages 배포

1. 이 폴더를 깃허브 레포지토리에 push 합니다.
2. 레포지토리 → Settings → Pages → Build and deployment
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)** → Save
3. 1~2분 후 `https://<아이디>.github.io/<레포이름>/` 에서 확인할 수 있습니다.
   (레포 이름이 `<아이디>.github.io` 이면 `https://<아이디>.github.io/` 가 주소입니다.)
