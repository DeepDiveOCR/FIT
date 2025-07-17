# 여행 추천 AI 서비스

외국인을 위한 맞춤형 한국 여행 추천 서비스입니다.

## 🚀 주요 기능

- **다국어 지원**: 한국어, 영어, 중국어, 일본어
- **개인화 추천**: 사용자 선호도 기반 여행지 추천
- **북마크 기능**: 관심 장소 저장 및 관리 (2초간 연속 클릭 방지)
- **리뷰 시스템**: 각 장소별 개별 리뷰 작성 및 수정
- **실시간 관리자 페이지**: Firestore onSnapshot으로 실시간 리뷰/통계 동기화
- **회원탈퇴**: 북마크 페이지에서 직접 계정 삭제
- **모바일 최적화**: 반응형 디자인

## 🛠️ 기술 스택

- **Frontend**: Vue.js 3, Vite
- **Backend**: Fast API
- **Database**: Firebase Firestore (실시간 동기화)
- **Authentication**: Firebase Auth
- **API**: 국문관광정보 서비스 API, Geolocation API

## 📱 시스템 아키텍처

### 시퀀스 다이어그램

```mermaid
sequenceDiagram
    participant U as 사용자
    participant A as 관리자
    participant F as Frontend (Vue)
    participant B as Backend (FastAPI)
    participant FDB as Firebase Firestore
    participant API as 관광정보 API

    Note over U,API: 1. 사용자 선호도 입력
    U->>F: 선호도 선택 (음식, 쇼핑, 관광지 등)
    U->>F: 자유 텍스트 입력
    U->>F: 추천받기 버튼 클릭
    F->>B: POST /api/save_user_preferences
    B->>FDB: 사용자 선호도 저장
    FDB-->>B: 저장 완료
    B-->>F: 저장 성공 응답

    Note over U,API: 2. 행사 데이터 조회(캐싱) 및 추천
    F->>B: GET /api/events?region=서울&date=...
    B->>B: 행사 데이터 조회(필터/정렬)
    alt DB에 데이터가 있음
        B->>FDB: 행사 데이터 조회
        FDB-->>B: 행사 데이터 반환
    else DB에 데이터가 없음(또는 부족)
        B->>API: 행사 데이터 요청(지역/페이지 등)
        API-->>B: 행사 데이터 반환
        B->>FDB: 행사 데이터 저장/업데이트
        FDB-->>B: 저장 완료
    end
    B-->>F: 행사 데이터 반환(추천 결과 포함)
    F-->>U: 추천 장소/행사 카드 표시

    Note over U,API: 3. Vector 검색 기반 추천(확장)
    F->>B: GET /api/recommend?user_id=...
    B->>B: find_nearest(사용자 벡터, 행사 벡터)
    B-->>F: 추천 결과 반환
    F-->>U: 추천 카드 표시

    Note over U,API: 4. 상세 정보 조회/캐싱
    U->>F: 행사 카드 클릭
    F->>B: GET /api/event_detail?contentid=...
    B->>B: 상세 정보 조회
    alt 상세 정보 있음
        B->>FDB: 상세 정보 조회
        FDB-->>B: 상세 정보 반환
    else 상세 정보 없음
        B->>API: 상세 정보 요청(detailIntro2)
        API-->>B: 상세 정보 반환
        B->>FDB: 상세 정보 저장
        FDB-->>B: 저장 완료
    end
    B-->>F: 상세 정보 반환
    F-->>U: 상세 모달 표시

    Note over U,API: 5. 북마크 및 리뷰
    U->>F: 북마크 버튼 클릭
    F->>B: POST /api/save_bookmark
    B->>FDB: 북마크 저장
    FDB-->>B: 저장 완료
    B-->>F: 저장 성공 응답
    F-->>U: 북마크 완료 모달 표시
    
    U->>F: 북마크 목록/리뷰 작성
    F->>B: POST /api/get_user_bookmarks, /api/save_review
    B->>FDB: 북마크/리뷰 조회 및 저장
    FDB-->>B: 결과 반환
    B-->>F: 결과 응답
    F-->>U: 북마크/리뷰 페이지 표시

    Note over A,API: 6. 관리자 실시간 모니터링
    A->>F: admin 로그인
    F->>F: /management 자동 리다이렉트
    F->>FDB: onSnapshot 구독(실시간 리뷰/통계)
    FDB-->>F: 실시간 데이터 업데이트
    F-->>A: 실시간 리뷰/통계 표시

    Note over U,API: 7. 회원탈퇴
    U->>F: 회원탈퇴 버튼 클릭
    F->>B: POST /api/delete_user_account
    B->>FDB: 사용자 데이터 완전 삭제
    FDB-->>B: 삭제 완료
    B-->>F: 삭제 성공 응답
    F->>F: 홈페이지로 리다이렉트
```

### 데이터베이스 구조 (Firestore NoSQL)

```mermaid
flowchart LR
 subgraph users["users"]
        U["users/{userId}<br>name: string<br>lang: string<br>provider: string<br>email: string<br>createdAt: timestamp<br>updatedAt: timestamp"]
        UP["users/{userId}/preferences/{preferenceId}<br>attraction: string<br>food: string<br>shopping: string<br>purpose: string<br>freeText: string<br>sns: string<br>createdAt: timestamp"]
        UB["users/{userId}/bookmarks/{placeId}<br>name: string<br>desc: string<br>image: string<br>bookmark: boolean<br>createdAt: timestamp"]
        L["users/{userId}/like/{placeId}<br>userId: string<br>placeId: string<br>createdAt: timestamp"]
  end
 subgraph admin["admin"]
        A["admin/{adminId}<br>email: string<br>role: string"]
        AR["admin/all_reviews/{reviewId}<br>uid: string<br>placeId: string<br>placeName: string<br>placeDesc: string<br>placeImage: string<br>review: string<br>userName: string<br>createdAt: timestamp"]
        CR["admin/crawled_reviews/{reviewId}<br>placeId: string<br>summary: string<br>updatedAt: timestamp"]
        CE["admin/crawled_reviews/{reviewId}/embeddings/{embeddingId}<br>review_id: string<br>summary: string<br>embedding_vector: array<br>model_used: string<br>created_at: timestamp"]
  end
 subgraph api_data["api_data"]
        AD["api_data"]
        ADL["api_data/{lang}"]
        ADLR["api_data/{lang}/{region}"]
        PD["api_data/{lang}/{region}/{contentid}<br>title: string<br>addr1: string<br>addr2: string<br>areacode: string<br>cat1: string<br>cat2: string<br>cat3: string<br>contenttypeid: string<br>detail_intro2: object<br>image: string<br>createdtime: string<br>collected_at: timestamp"]
  end
 subgraph subGraph3["Firestore Collections"]
        users
        admin
        api_data
  end
    U --> UP & UB
    A --> AR & CR
    CR --> CE
    AD --> ADL
    ADL --> ADLR
    ADLR --> PD
    U --> L

     U:::userNode
     UP:::userNode
     UB:::userNode
     L:::userNode
     A:::adminNode
     AR:::adminNode
     CR:::adminNode
     CE:::adminNode
     AD:::apiNode
     ADL:::apiNode
     ADLR:::apiNode
     PD:::apiNode 
```


## 🚀 설치 및 실행

### 📋 사전 요구사항
- Python 3.8 이상
- Node.js 16 이상
- npm 또는 yarn

### 🚀 빠른 시작 (권장)
프로젝트 루트 폴더에서 다음 명령어를 실행하세요:
```powershell
.\all.ps1
```



### 🌐 접속 정보
- **프론트엔드**: http://localhost:5173
- **백엔드 API**: http://localhost:8000

### 📝 주의사항
1. 백엔드 실행 전 `firebase.json` 파일이 `backend` 폴더에 있어야 합니다
2. 가상환경 활성화 후 백엔드를 실행해야 합니다
3. 프론트엔드는 별도 터미널에서 실행해야 합니다

### 🔍 문제 해결
- 포트 충돌 시: 다른 포트 사용 또는 기존 프로세스 종료
- 의존성 오류: `pip install -r requirements.txt` 재실행
- npm 오류: `npm install` 재실행

## 📋 API 엔드포인트

### 사용자 선호도
- `POST /api/save_user_preferences` - 선호도 저장
- `POST /api/get_latest_user_preferences` - 최신 선호도 조회

### 북마크
- `POST /api/save_bookmark` - 북마크 저장
- `POST /api/get_user_bookmarks` - 북마크 목록 조회
- `POST /api/delete_user_bookmark` - 북마크 삭제

### 리뷰
- `POST /api/save_review` - 리뷰 저장/수정
- `POST /api/get_user_reviews` - 사용자 리뷰 조회
- `GET /api/get_all_reviews` - 전체 리뷰 조회 (관리자용)

### 사용자 관리
- `POST /api/update_user_language` - 언어 설정 업데이트
- `POST /api/delete_user_account` - 회원탈퇴

## 🌟 주요 페이지

1. **홈페이지** (`/`) - 언어 선택 및 로그인
2. **목적지 선택** (`/destination`) - 여행 목적지 입력
3. **선호도 입력** (`/preference`) - 개인 취향 설정
4. **추천 결과** (`/recommend`) - 맞춤형 추천 결과
5. **북마크 목록** (`/bookmarks`) - 저장된 장소 관리 및 리뷰
6. **관리자 페이지** (`/management`) - 실시간 리뷰/통계 관리 (관리자 계정정만 접근)

## 🔧 주요 기능 상세

### 관리자 페이지 (Management.vue)
- **자동 리다이렉트**: 관리자 계정으로 로그인 시 자동으로 `/management`로 이동
- **실시간 동기화**: Firestore onSnapshot으로 리뷰/통계 실시간 업데이트
- **통계 대시보드**: 전체 사용자 수, 북마크 수, 리뷰 수, 장소별 통계
- **리뷰 관리**: 모든 사용자의 리뷰를 시간순으로 확인

### 북마크 UX 개선
- **연속 클릭 방지**: 북마크 버튼 클릭 후 2초간 비활성화
- **정확한 메시지**: 추가/삭제 성공/실패 메시지 분기
- **개별 리뷰**: 각 북마크마다 개별 리뷰 작성/수정 가능

### 회원탈퇴
- **완전 삭제**: 사용자 데이터, 북마크, 리뷰, 선호도 모두 삭제
- **Firebase Auth**: Firebase Auth 계정도 함께 삭제


## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

