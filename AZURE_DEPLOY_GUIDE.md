# Azure for Students 무료 React 앱 배포 가이드

## 개요
Azure for Students 구독에서 React 프로젝트를 **완전 무료**로 배포할 수 있는 방법들을 정리했습니다.

## 현재 구독 정보
- **구독명**: Azure for Students
- **상태**: 활성화됨
- **계정**: parkjinah2@outlook.com

## 무료 배포 옵션 (우선순위별)

### 1. Azure Static Web Apps (✅ 추천)
**완전 무료**, React/SPA에 최적화

#### 특징
- ✅ **완전 무료** (Azure for Students에서 추가 비용 없음)
- ✅ GitHub 연동 자동 CI/CD
- ✅ 전역 CDN 포함
- ✅ 커스텀 도메인 지원
- ✅ HTTPS 자동 적용
- ✅ API 라우팅 지원

#### 제한사항
- 월 100GB 대역폭
- 0.5GB 저장공간

#### 배포 명령어
```bash
# Static Web Apps CLI 설치
npm install -g @azure/static-web-apps-cli

# 로그인 확인
az login

# 앱 생성 및 배포
az staticwebapp create \
  --name "tomatomato-app" \
  --resource-group "rg-tomatomato" \
  --source "https://github.com/YOUR_USERNAME/tomatomato" \
  --location "East Asia" \
  --branch "main" \
  --app-location "/" \
  --output-location "build"
```

### 2. Azure App Service (Free Tier)
**제한적 무료**, 더 많은 기능

#### 특징
- ✅ **무료 티어 제공** (F1 Plan)
- ✅ Node.js 런타임 지원
- ✅ 커스텀 도메인 지원 (유료 플랜에서)
- ⚠️ 매일 60분 CPU 제한
- ⚠️ 1GB 메모리
- ⚠️ 무료 도메인 없음 (*.azurewebsites.net만)

#### 배포 명령어
```bash
# 리소스 그룹 생성
az group create --name rg-tomatomato --location "Korea Central"

# App Service 플랜 생성 (무료)
az appservice plan create \
  --name plan-tomatomato \
  --resource-group rg-tomatomato \
  --sku FREE

# 웹앱 생성
az webapp create \
  --resource-group rg-tomatomato \
  --plan plan-tomatomato \
  --name tomatomato-webapp \
  --runtime "NODE|18-lts"

# 빌드 및 배포
npm run build
az webapp up --name tomatomato-webapp --resource-group rg-tomatomato
```

### 3. Azure Storage Static Website
**가장 저렴**, 정적 파일만

#### 특징
- ✅ **매우 저렴** (거의 무료)
- ✅ CDN 연동 가능
- ❌ 커스텀 도메인 제한적
- ❌ HTTPS 기본 미제공 (CDN 필요)

#### 배포 명령어
```bash
# 스토리지 계정 생성
az storage account create \
  --name tomatomatostorage \
  --resource-group rg-tomatomato \
  --location "Korea Central" \
  --sku Standard_LRS

# 정적 웹사이트 활성화
az storage blob service-properties update \
  --account-name tomatomatostorage \
  --static-website \
  --index-document index.html

# 빌드 후 업로드
npm run build
az storage blob upload-batch \
  --source ./build \
  --destination '$web' \
  --account-name tomatomatostorage
```

## 추천 배포 방법

### ✅ Azure Static Web Apps (1순위)
- React 프로젝트에 가장 적합
- 완전 무료
- GitHub Actions 자동 설정
- 전문적인 CI/CD 파이프라인

### 배포 전 준비사항
1. GitHub 리포지토리에 코드 푸시
2. Azure CLI 로그인 확인
3. 리소스 그룹 생성

```bash
# 리소스 그룹 생성
az group create --name rg-tomatomato --location "Korea Central"
```

## 비용 모니터링
Azure for Students는 $100 크레딧을 제공하며, 위 방법들은 모두 무료 또는 매우 저렴합니다.

```bash
# 현재 사용량 확인
az consumption usage list --output table
```

## 문제 해결
- GitHub 연동 실패: Personal Access Token 확인
- 빌드 실패: Node.js 버전 호환성 확인 (package.json의 engines 필드)
- 도메인 이슈: DNS 설정 24-48시간 대기

## 참고 링크
- [Azure Static Web Apps 문서](https://docs.microsoft.com/azure/static-web-apps/)
- [Azure for Students 혜택](https://azure.microsoft.com/free/students/)