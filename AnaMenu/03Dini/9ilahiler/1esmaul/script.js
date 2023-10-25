function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [
    {
      name:"♫ Esmaül Hüsna Esma Zikri ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dcec9f4ffa8c4cfe005d1f0dbe2486ca.mp3 ",
      duration:""
    },

    {
      name:"♫  Allah Diyelim Zikir Edelim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/422538e08544c18fe530f5a972e90b34.mp3 ",
      duration:""
    },


    {
      name:"♫  Salavatı Şerife",
      file:"https://cdn.muzikmp3indir.com/mp3_files/846a94cc5a4b4a421de0718d95a5196f.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah Canan Allah ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/754f08124c5030d242f4de4020d990da.mp3",
      duration:""
    },
 {
      name:"♫ Zikrullah Dhikr Allah ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e9efbfd1aa374855d1cf3b5e159edacf.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayy Allah Zikri ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8fa84591a7dfa978fd2f1db77f9c2fd7.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah Zikri",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8fa84591a7dfa978fd2f1db77f9c2fd7.mp3",
      duration:""
    },
 {
      name:"♫ Zikrullah Dhikr Allah  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e9efbfd1aa374855d1cf3b5e159edacf.mp3 ",
      duration:""
    },
 {
      name:"♫ Salavatı Şerife ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/846a94cc5a4b4a421de0718d95a5196f.mp3 ",
      duration:""
    },
 {
      name:"♫ Asmaul Husna ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/39f6cf6e10cbcf179034b779ae7a24f4.mp3 ",
      duration:""
    },
 {
      name:"♫ Ya Nebi Selam Aleyke ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bf16466549dc09a3061d98ed7b4d2c5b.mp3",
      duration:""
    },
 {
      name:"♫ Medet ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/07f3b99929875c4d3d913d86b3c8fb53.mp3 ",
      duration:""
    },
 {
      name:"♫ Ali Gördüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0997f1d43c3875d0c9a46cc421522590.mp3 ",
      duration:""
    },
 {
      name:"♫ La İlahe İllallah",
      file:" https://cdn.muzikmp3indir.com/mp3_files/dd7c2889aef6705a0f7a168aa72d2a6f.mp3",
      duration:""
    },
 {
      name:"♫ Aşıkların Zikri Hu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6f84cb9097f8aa449119fd021df20163.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşkın Sesi Allah Zikri ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1162dffb39b97cd3f994a7ded15ebfec.mp3",
      duration:""
    },
 {
      name:"♫ Aşkın Yolu Zikrullah ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef0eec61da3ed5005ac6c4870f5437ed.mp3 ",
      duration:""
    },
 {
      name:"♫ Can Allah Canan Allah ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/754f08124c5030d242f4de4020d990da.mp3 ",
      duration:""
    },
 {
      name:"♫ Dervişlerin Maksudu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/73cd6fb700dd49d45b092e876ee435ad.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayy Allah Zikri ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8fa84591a7dfa978fd2f1db77f9c2fd7.mp3",
      duration:""
    },
 {
      name:"♫ Müthiş Zikir ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6aa7c696847618aac8e5b54fedbe87ee.mp3 ",
      duration:""
    },
 {
      name:"♫ Üzülme Allah Var La Tahzen ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f5afa9c57dd36060423b854e32fd2c53.mp3",
      duration:""
    },
 {
      name:"♫ Zikirli Salavatı Şerif",
      file:" https://cdn.muzikmp3indir.com/mp3_files/20e7b10a982c36b87f7660b8adc98154.mp3",
      duration:""
    },
 {
      name:"♫ Dhikr Allah ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e9efbfd1aa374855d1cf3b5e159edacf.mp3",
      duration:""
    }


  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }