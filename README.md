# Timetable
## intro
학교 시간표
pc/mobile: http://오늘의시간표.kro.kr

원격 수업 기간에 온라인 클래스 접속하기 위한 일련의 과정 (경기도>화성시>학교명>학년>과목 선택 과정)이 너무 복잡하여 제작하게 되었다.
2학기 무렵 Zoom을 병행하는 과목이 생기면서, sweetalert 함수를 사용해 선택창을 띄우게끔 했으며, .js파일을 분리했다.
자바스크립트에서 정의된 각 함수는 어떤 역할을 하는지 주석 처리를 했으며, 수업방식을 묻고 창을 띄우는 과정을 과목별로 함수로 만들어 놓았다.

### 예시
korean() => 국어
techhome() => 기술가정
등...
