process.argv.forEach(function (item, index){
    console.log(index + ' : ' + typeof(item) + ' : ', item);

    // 실행 매개변수에 --exit가 있을 때
    if(item == '--exit') {
        // 다음 실행 매개변수를 얻습니다.
        var exitTime = Number(process.argv[index + 1]);

        // 일정 시간 후 프로그램을 종료 합니다.
        setTimeout(function() {
            process.exit();
        }, exitTime);
    }
})

console.log('- process.env:', process.env);
console.log('- process.version:', process.version);
console.log('- process.versions:', process.versions);
console.log('- process.arch:',process.arch);
console.log('- process.platform:',process.platform);
console.log('- process.connected:',process.connected);
console.log('- process.execArgv:',process.execArgv);
console.log('- process.exitCode:',process.exitCode);
console.log('- process.mainModule:',process.mainModule);
console.log('- process.release:',process.release);
console.log('- process.memoryUsage():',process.memoryUsage());
console.log('- process.uptime():',process.uptime());
console.log('- process.uptime():',process.uptime());
console.log('- process.uptime():',process.uptime());
