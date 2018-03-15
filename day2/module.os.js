var os = require('os');

// 운영체제의 호스트 이름을 리턴합니다.
console.log(os.hostname());

// 운영체제의 이름을 리턴합니다.
console.log(os.type());

// 운영체제의 플랫폼을 리턴합니다.
console.log(os.platform());

// 운영체제의 아키텍쳐를 리턴합니다.
console.log(os.arch());

// 운영체제의 버전을 리턴합니다.
console.log(os.release());

// 운영체제가 실행된 시간
console.log(os.uptime());

// 로드 에버리지 정보를 담은 배열 리턴
console.log(os.loadavg());

// 시스템의 총 메모리
console.log(os.totalmem());

// 시스템의 사용가능한 메모리
console.log(os.freemem());

// cpu의 정보를 담은 객체
console.log(os.cpus());

// 네트워크 인터페이스의 정보를 담은 배열
console.log(os.networkInterfaces());
