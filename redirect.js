
/*1-6 시간표 자바스크립트 파일. SweetAlert 사용해서 확인 후 Redirect. 
두 개 이상 플랫폼 병행하는 과목도 대응 가능.

by 동탄중앙고 10613 오은택*/


function ca() //창체: 온라인 클래스만 시행하는 과목
{swal("온라인 클래스로 이동할까요?","","success",{
    buttons: {
      cancel: "취소",
      OK: true,
    }
  })
  .then((value) => {
    switch (value) {
   
      case "OK":
        location.href = "https://hoc41.ebssw.kr/2020dtja1/";
        break;   
      default:
        
    }
  });
}

function korean() //국어: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
    buttons: {
      cancel: "취소",
      OK: true,
    }
  })
  .then((value) => {
    switch (value) {
   
      case "OK":
        location.href = "https://zoom.us/j/9641411259?pwd=cjMxYUFJYXJPQ0FZTGZ4ZEVRcjVmUT09";
        break;   
      default:
        
    }
  });
}

function social() //통합사회: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
    buttons: {
      cancel: "취소",
      OK: true,
    }
  })
  .then((value) => {
    switch (value) {
   
      case "OK":
        location.href = "https://zoom.us/j/6109037003?pwd=YXVybnZsb1FQL2FBdUF6M0NLNitVUT09";
        break;   
      default:
        
    }
  });
}

function history() //한국사: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
    buttons: {
      cancel: "취소",
      OK: true,
    }
  })
  .then((value) => {
    switch (value) {
   
      case "OK":
        location.href = "https://zoom.us/j/7122146131?pwd=dy9pakJSUDEvQVNpaGVxOGZGT1F6QT09";
        break;   
      default:
        
    }
  });
}

function math() //수학: 구글 클래스룸, 구글 밋 병행하는 과목
{swal("어떤 형태의 수업인가요?","","info",{
    buttons: {
      cancel: "취소",
      class: { text: "구글 클래스룸", value: "gocl",},
      meet: { text: "구글 밋", value: "meet",},
    }
  })
  .then((value) => {
    switch (value) {
   
      case "gocl":
        location.href = "https://classroom.google.com/c/MTQ5MzQxODQwNDAw";
        break;
   
      case "meet":
        location.href = "https://meet.google.com/lookup/cqrmert6xg";
        break;
   
      default:
        
    }
  });
}

function music() //음악: 구글 클래스룸, 구글 밋 병행하는 과목
{swal("어떤 형태의 수업인가요?","","info",{
    buttons: {
      cancel: "취소",
      class: { text: "구글 클래스룸", value: "gocl",},
      meet: { text: "구글 밋", value: "meet",},
    }
  })
  .then((value) => {
    switch (value) {
   
      case "gocl":
        location.href = "https://classroom.google.com/c/MTMxNDk2MTM0MzY0";
        break;
   
      case "meet":
        location.href = "https://meet.google.com/lookup/dyxd6sphgo";
        break;
   
      default:
        
    }
  });
}

function science() //통합과학: Zoom, 온라인 클래스 병행하는 과목
    {swal("어떤 형태의 수업인가요?","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://zoom.us/j/3756389007?pwd=M29pZzFRVEtHTkdZSUpVQzlXaHNVQT09";
            break;
       
          case "oncl":
            location.href = "https://hoc41.ebssw.kr/atmoslsh/";
            break;
       
          default:
            
        }
      });
}

function tamsil() //과학탐구실험: Zoom, 온라인 클래스 병행하는 과목
    {swal("어떤 형태의 수업인가요?","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://us02web.zoom.us/j/83387385588?pwd=MGptc3E5ZE9SbjAwdm1sZ09TMGVLZz09";
            break;
       
          case "oncl":
            location.href = "https://hoc41.ebssw.kr/earthssss20/";
            break;
       
          default:
            
        }
      });
}

function techhome() //기술가정: Zoom, 온라인 클래스 병행하는 과목
    {swal("어떤 형태의 수업인가요?","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://zoom.us/j/99400167593?pwd=d0Rna1c5czlXV1NPQmlZSW1qNFBzZz09";
            break;
       
          case "oncl":
            location.href = "https://hoc41.ebssw.kr/teh21/";
            break;
       
          default:
            
        }
      });
}

function english() //영어: Zoom, 온라인 클래스 병행하는 과목
    {swal("어떤 형태의 수업인가요?","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://zoom.us/j/5211656956?pwd=ZFJ5SHJYeTJMZ3JkbkxnUDcrUlJZUT09";
            break;
       
          case "oncl":
            location.href = "https://hoc41.ebssw.kr/englishclass1stgrade/";
            break;
       
          default:
            
        }
      });
}

function jinro() //진로: Zoom, 온라인 클래스 병행하는 과목
    {swal("어떤 형태의 수업인가요?","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://us02web.zoom.us/j/5013839985?pwd=SVVZSGR1SFRjcmhwdlI4Mmk0RGk3Zz09";
            break;
       
          case "oncl":
            location.href = "https://hoc41.ebssw.kr/jinroinfo/";
            break;
       
          default:
            
        }
      });
}

function pe() //체육: Zoom, 온라인 클래스 병행하는 과목
    {swal("어떤 형태의 수업인가요?","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://us04web.zoom.us/j/8547166710?pwd=bEVuR09DTGllZU56ZnowY2xCbU1aQT09";
            break;
       
          case "oncl":
            location.href = "https://hoc41.ebssw.kr/dtmhspe1/";
            break;
       
          default:
            
        }
      });
}