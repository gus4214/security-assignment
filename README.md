# Security-assignment

이 레포지토리는 **RBAC(역할 기반 접근 제어)** 및 **사용자 리스트 검색/필터** 기능을 구현한 과제 예시입니다.  

<br>

## 1. 실행에 필요한 상세 내용

1. **프로젝트 설치**  
   - 리포지토리를 클론 후, 프로젝트 루트 디렉터리에서 의존성을 설치합니다.
     ```bash
     npm install
     ```
     또는
     ```bash
     yarn
     ```
   - 설치가 완료되면, 아래 명령어로 프로젝트를 실행/빌드할 수 있습니다.

2. **개발 서버 실행 (개발 모드)**  
   ```bash
   npm run dev
   ```
   - http://localhost:3000에서 앱을 확인할 수 있습니다.

3. **프로덕션 빌드 및 배포**
   - 프로덕션 빌드
   ```bash
   npm run build
   ```
   - 프로덕션 서버 실행
   ```bash
   npm run start
   ```

<br>

## 2. 사용된 기술 스택
- React 19 / Next.js 15
  - 최신 App Router 사용
- TypeScript 5
  - 안전한 타입 추론 및 빌드
- React Hook Form
  - 폼 및 유효성 검사
- Jotai
  - 로그인 사용자 상태(RBAC 정보 포함) & 전역 상태관리 (atomWithStorage로 persist)
- TanStack React Table
  - 테이블(정렬, 필터, 페이지네이션 등)
- Tailwind CSS
  - 빠른 스타일링 (유틸리티 클래스 기반)
- Zod
  - 폼 및 데이터 유효성 검증
- Lucide Icons, Radix UI 등
  - 아이콘, UI Primitive

<br>
 
## 3. 폴더 구조 (주요 디렉터리)
```bash
security-assignment/
├─ app/                 # Next.js App Router 페이지 & 레이아웃
├─ components/          # 재사용 가능한 UI 컴포넌트
├─ containers/          # 비즈니스 로직 컴포넌트(주로 여러 하위 컴포넌트를 조합)
├─ data/                # JSON 파일 등 정적 데이터
├─ hooks/               # 커스텀 훅
├─ store/               # Jotai 전역 상태 관리용 코드
├─ types/               # TS 타입 및 인터페이스
├─ config/              # RBAC 권한 상수, 필터 옵션 등 설정
└─ …
```

<br>

## 4. QA Case 정리


### 1. 로그인 페이지 (/login)

#### 1-1. 이메일 로그인  
**시나리오**  
1. 로그인 되지 않는 사용자의 경우 상단 헤더의 로그인 버튼을 클릭하여 로그인 페이지로 이동한다.
2. 사용자 이메일 입력 창에 실제 `user-list.json`에 존재하는 이메일을 입력한다.
  - 이메일과 비밀번호는 필수 입력만 유효성 검사 진행한다.
3. "로그인" 버튼을 클릭한다.
  - 해당 이메일이 존재하는지 확인한다.
  - 해당 사용자의 권한정보(`userRole`)를 로드하여, 로그인 상태가 유지된다.  
  - 로그인 성공 후, '/' -> '/users' 이동한다.

#### 1-2. 존재하지 않는 이메일 입력 시  
**시나리오**  
1. `user-list.json`에 존재하지 않는 임의의 이메일 입력  
2. "로그인" 버튼을 클릭한다.  
  - "존재하지 않는 사용자입니다" 등 에러 메시지를 표시하고, 로그인 페이지에 머무른다.  
  - 로그인 상태가 생성되지 않는다.

#### 1-3. 로그인 후 새로고침 (Persist)  
**시나리오**  
1. 정상 이메일로 로그인 성공  
2. 브라우저를 새로고침  
  - Jotai의 `atomWithStorage` - 로컬 스토리지 통해 로그인 상태 유지

---

### 2. 유저 리스트 페이지 (/Users)

#### 2-1. RBAC에 따른 목록 필터링  
**시나리오**  
1. Admin 권한 사용자 로그인 → 모든 사용자 노출  
2. PrimeUser 권한 → 모든 사용자 노출 (단, Invite 버튼 등은 권한 제약 가능)  
3. RegularUser 권한 → 본인 정보만 노출  
4. Viewer 권한 → 빈 목록 + 사이드바 메뉴 제한  

#### 2-2. 검색 기능 (User Name / User Email / User Phone)  
**시나리오**  
1. 유저 리스트 페이지에 진입  
2. 검색 폼에서 필터 옵션(예: userName)과 검색어를 입력  
3. 해당 검색어를 입력과 동시에 포함한 사용자만 목록에 표시되는지 확인  
  - 검색어가 없으면 전체 목록(권한으로 필터된 결과)  
  - 검색어가 있으면 해당 값이 일치하는 사용자만 필터되어 표시

#### 2-3. 역할 체크박스 필터  
**시나리오**  
1. 사용자 권한 체크박스는 응답 값 내에 존재하는 값으로만 구성
2. 체크박스를 하나 이상 선택 (“All” 체크박스 선택 시 전체가 선택됨)
3. 선택된 역할에 해당하는 사용자만 표시  
  - 체크된 역할에 맞게 목록이 동적 필터링된다.  
  - 체크박스가 모두 해제되면 빈 목록 표시.

---

### 3. 미구현 

- **발견 버그**
  - 리스트 페이지에서 새로고침 할 경우 체크박스가 유지 되지 않고 빈 값으로 초기화되는 문제
- **Task 페이지**
- **Task 생성 페이지**  

---

