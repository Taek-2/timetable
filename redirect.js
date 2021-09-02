
/*1-6 시간표 자바스크립트 파일. SweetAlert 사용해서 확인 후 Redirect. 
두 개 이상 플랫폼 병행하는 과목도 대응 가능.

by 동탄중앙고 10613 오은택*/




function math() //수학2 : Zoom, 온라인 클래스 병행하는 과목
    {swal("Zoom에서 출석후 온클 강의를 들어주세요.","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://zoom.us/j/5227990930?pwd=a3Z0RURLNkVXclVwNDBlUTNXMjBqUT09";
            break;
       
          case "oncl":
            location.href = "https://kyg1.ebsoc.co.kr/class/math78910";
            break;
       
          default:
            
        }
      });
}

function music() //음악연주: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://zoom.us/j/8372687784?pwd=QjRhMkd4aU14azRaQk5CaGtpOFJGZz09";
      break;   
    default:
      
  }
});
}

function ABC() //탐구 A/B/C: 과목마다 다름
    {swal("무슨 과목인가요?","","info",{
        buttons: {
          cancel: "취소",
          physics: { text: "물리학 온클",},
          chemistry: { text: "화학 줌",},
          earth: { text: "지구과학 줌",},
          biology: { text: "생명과학 줌",},
        }
      })
      .then((value) => {
        switch (value) {
       
          case "physics":
            location.href = "https://kyg1.ebsoc.co.kr/class/dtjaphy1";
            break;

          case "chemistry":
            location.href = "https://us02web.zoom.us/j/81255674885?pwd=NzYvb1B3YzB5eVNUR0wybEk0cmRJdz09";
            break;

          case "earth":
            location.href = "https://zoom.us/j/3756389007?pwd=UHRpWmVpRDl2M2JOdXdGcWp2OEtTQT09";
            break;

          case "biology":
            location.href = "https://zoom.us/j/2075015772?pwd=V1hoY1dUQUJBaGNrL1p1eFk5enRCZz09";
            break;
       
          default:
            
        }
      });
}

function stactics() //확률과 통계: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://zoom.us/j/9245017232?pwd=N2NrZjlDNXZVd0gveDM3UDFSbU0xdz09";
      break;   
    default:
      
  }
});
}

function korean() //언매: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://zoom.us/j/96945493443?pwd=MStKVGk0UzBkWnUzLy9ydkJSY3Fidz09";
      break;   
    default:
      
  }
});
}

function japanese() //일본어1: Zoom, 온라인 클래스 병행하는 과목
    {swal("Zoom에서 출석후 온클 강의를 들어주세요.","","info",{
        buttons: {
          cancel: "취소",
          oncl: { text: "온라인 클래스", value: "oncl",},
          Zoom: true,
        }
      })
      .then((value) => {
        switch (value) {
       
          case "Zoom":
            location.href = "https://zoom.us/j/8198690704?pwd=ekdVb2ZwWHdFRjRQSTZkVktEbStaQT09";
            break;
       
          case "oncl":
            location.href = "https://kyg1.ebsoc.co.kr/class/195/";
            break;
       
          default:
            
        }
      });
}

function english() //영어2: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://zoom.us/j/3254480979?pwd=ZTFtNW5MQnRrM2RIU2RoQmVFUnRxZz09";
      break;   
    default:
      
  }
});
}

function jinro() //진로: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://zoom.us/j/8372687784?pwd=dWFkc2xTWm43Z1lpZXc0dnJ5aXEzUT09";
      break;   
    default:
      
  }
});
}

function ca() //창체: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://zoom.us/j/8372687784?pwd=dWFkc2xTWm43Z1lpZXc0dnJ5aXEzUT09";
      break;   
    default:
      
  }
});
}

function pe() //운동과 건강: Zoom만 시행하는 과목
{swal("Zoom으로 이동할까요?","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://zoom.us/j/8547166710?pwd=akZ3ZlZ3TE83T2JoMmZ4eWxnM096dz09";
      break;   
    default:
      
  }
});
}
