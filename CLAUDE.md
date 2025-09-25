# 기본 규칙

## 언어 설정

- 사용자와의 모든 대화는 한국어로만 진행합니다.

## 문서화 규칙

- 기본 문서화는 README.md, CLAUDE.md 파일에 작성합니다.

# MCP 우선 사용 정책

- **모든 클라우드 작업은 MCP 도구를 최우선으로 사용**
- Azure 작업: `az` CLI보다 `mcp__Azure_MCP_Server__*` 도구 우선 사용
- Static Web Apps: `swa` CLI보다 MCP를 통한 Azure 배포 우선
- MCP 도구로 해결되지 않는 경우에만 CLI 도구 사용

# MCP 설정

- MCP (Model Context Protocol) 도구를 사용하려면 `~/.claude.json` 파일에 설정을 추가해야 합니다.
- MCP 서버는 설치하지 말고 **반드시** `~/.claude.json` 설정만으로 사용

## MCP 서버 선택 기준

- Playwright로 https://glama.ai/mcp/servers 에 접속해서 MCP 서버 검색
- **우선순위**: `h2 > span` 요소에서 "official" 텍스트 확인이 최우선
- **차순위**: security, license, quality가 모두 A 등급인 서버 선택
- A 등급 확인: `data-sentry-component="ScoreBubble"` 속성을 가진 요소 중 "A"가 표시된 것을 찾음

## MCP 서버 찾기

- 사용 가능한 MCP 서버 목록: https://glama.ai/mcp/servers
- Azure, AWS, Google Cloud 등 다양한 서비스용 MCP 서버 제공

## 예제 설정

```json
{
  "mcpServers": {
    "서버이름": {
      "command": "명령어",
      "args": ["인자들"]
    }
  }
}
```

# Claude Code 기능

## Playwright를 통한 웹 접근

- Playwright 자동화를 사용하여 웹사이트에 접근 가능
- 웹 스크래핑, 테스팅, 브라우저 자동화 작업에 유용

## 사용 예제

```bash
# Playwright가 설치되어 있지 않다면 설치
npm install playwright

# Playwright 스크립트 실행
node playwright_script.js
```
