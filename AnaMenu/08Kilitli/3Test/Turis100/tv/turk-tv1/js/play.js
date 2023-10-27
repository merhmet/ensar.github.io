		$(document).ready(function($)
		{
			videoPlayer = $("#VideoPlayer").Video({   //ALL PLUGIN OPTIONS
				//(how may times video is played, downloaded, etc.)
                instanceName:"player1",                      //name of the player instance
				instanceTheme:"dark",                        //choose video player theme: "dark", "light"
				autohideControls:5,                          //autohide HTML5 player controls
				hideControlsOnMouseOut:"No",                 //hide HTML5 player controls on mouse out of the player: "Yes","No"
				playerLayout: "fixedSize",                   //Select player layout: "fitToContainer" (responsive mode), "fixedSize" (fixed mode), "fitToBrowser" (fill the browser mode)
				videoPlayerWidth:1100,                       //fixed total player width (only for playerLayout: "fixedSize")
				videoPlayerHeight:580,                       //fixed total player height (only for playerLayout: "fixedSize")
				videoRatio: 16/9,                            //set your video ratio (calculate video width/video height)
                videoRatioStretch: false,                    //adjust video ratio for case when playlist is "opened" : true/false
				iOSPlaysinline: true,                        //on iOS device: play videos inline (like on desktop) or in Fullscreen by default: true/false
                floatPlayerOutsideViewport: false,           //show Sticky player if video player is not in viewport when scrolling through page
				pauseStickyOutsideViewport: false,           //pause sticky player if video player is not in viewport when scrolling through page
                lightBox:false,                              //lightbox mode :true/false
				lightBoxAutoplay: false,                     //autoplay video when lightbox opens: true/false
				lightBoxThumbnail:"images/preview_images/poster.jpg", //lightbox thumbnail image
				lightBoxThumbnailWidth: 400,                 //lightbox thumbnail image width
				lightBoxThumbnailHeight: 220,                //lightbox thumbnail image height
				lightBoxCloseOnOutsideClick: true,           //close lightbox when clicked outside of player area
				playlist:"Right playlist",                   //choose playlist type: "Right playlist", "Bottom playlist", "Off"
                playlistShowOnlyThumbnails:false,            //show thumbnails only in playlist
				playlistOrder:"",                            //choose order of videos in playlist, choose which videos will show ("0,1,2" will show first three videos from playlist)
                playlistScrollType:"light",                  //choose scrollbar type: "light","minimal","light-2","light-3","light-thick","light-thin","inset","inset-2","inset-3","rounded","rounded-dots","3d","dark","minimal-dark","dark-2","dark-3","dark-thick","dark-thin","inset-dark","inset-2-dark","inset-3-dark","rounded-dark","rounded-dots-dark","3d-dark","3d-thick-dark"
				playlistBehaviourOnPageload:"opened (default)",//choose playlist behaviour when webpage loads: "closed", "opened (default)" (not apply to Vimeo player)
				autoplay:true,                              //autoplay when webpage loads: true/false (youtube autoplay - not supported on mobile)
				colorAccent:"#767676",  

				videoPlayerShadow:"effect1",                 //choose player shadow:  "effect1" , "effect2", "effect3", "effect4", "effect5", "effect6", "off"
				loadRandomVideoOnStart:"No",                 //choose to load random video when webpage loads: "Yes", "No"
				shuffle:"No",				                 //choose to shuffle videos when playing one after another: "Yes", "No" (shuffle button enabled/disabled on start)
				posterImgOnVideoFinish:"",                   //player poster image on video finish (if enabled onFinish:"Stop video")
				onFinish:"Play next video",                  //"Play next video","Restart video", "Stop video",
				nowPlayingText:"Yes",                        //enable disable now playing title: "Yes","No"
				HTML5VideoQuality:"HD",                      //choose HTML5 video quality (HD, SD)
                
                preloadSelfHosted:"none",                    //choose preload buffer for self hosted mp4 videos (video type HTML5): "none", "auto"
				rightClickMenu:true,                         //enable/disable right click over HTML5 player: true/false
				hideVideoSource:true,						 //option to hide self hosted video sources (to prevent users from download/steal your videos): true/false
				showAllControls:true,						 //enable/disable all HTML5 player controls: true/false

				rewindShow: "Yes", 							 //enable/disable rewind option: "Yes","No"
                qualityShow: "Yes",                          //enable/disable quality video option: "Yes","No"
				infoShow:"No",                              //enable/disable info option: "Yes","No"
				shareShow:"No",                             //enable/disable all share options: "Yes","No"
				facebookShow:"No",                          //enable/disable facebook option individually: "Yes","No"
				twitterShow:"No",                           //enable/disable twitter option individually: "Yes","No"
				
				logoShow:"Yes",                              //"Yes","No"
				logoClickable:"Yes",                         //"Yes","No"
				logoPath:"images/logo/logo.png",             //path to logo image
				logoGoToLink:"",                                //redirect to page when logo clicked
				logoPosition:"bottom-left",                  //choose logo position: "bottom-right","bottom-left","top-right"
				embedShow:"No",                             //enable/disable embed option: "Yes","No"

                mutedNotificationText:"Video has no sound",  //translate "Video has no sound" button to your language
				playBtnTooltipTxt:"Play",                    //translate "Play" to your language
				pauseBtnTooltipTxt:"Pause",                  //translate "Pause" to your language
				rewindBtnTooltipTxt:"Rewind",                //translate "Rewind" to your language
				downloadVideoBtnTooltipTxt:"Download video", //translate "Download video" to your language
				qualityBtnOpenedTooltipTxt:"Close settings", //translate "Close settings" to your language
				qualityBtnClosedTooltipTxt:"Settings",       //translate "Settings" to your language
				ccShowOnHTML5Videos: true,                   //enable/disable mp4 captions antalyaly for all HTML5 videos
                ccShowOnVideoLoad: true,                     //enable/disable mp4 captions to display on HTML5 video load (if ccUrl is defined)
                ccBtnOpenedTooltipTxt:"Hide captions",       //translate "Hide captions" to your language
				ccBtnClosedTooltipTxt:"Show captions",       //translate "Show captions" to your language
                muteBtnTooltipTxt:"Mute",                    //translate "Mute" to your language
				unmuteBtnTooltipTxt:"Unmute",                //translate "Unmute" to your language
				fullscreenBtnTooltipTxt:"Fullscreen",        //translate "Fullscreen" to your language
				exitFullscreenBtnTooltipTxt:"Exit fullscreen",//translate "Exit fullscreen" to your language
				infoBtnTooltipTxt:"Show info",				 //translate "Show info" to your language
				embedBtnTooltipTxt:"Embed",                  //translate "Embed" to your language
				shareBtnTooltipTxt:"Share",                  //translate "Share" to your language
				volumeTooltipTxt:"Volume",                   //translate "Volume" to your language
				playlistBtnClosedTooltipTxt:"Show playlist", //translate "Show playlist" to your language
				playlistBtnOpenedTooltipTxt:"Hide playlist", //translate "Exit fullscreen" to your language
				facebookBtnTooltipTxt:"Share on Facebook",   //translate "Share on Facebook" to your language
				twitterBtnTooltipTxt:"Share on Twitter",     //translate "Share on Twitter" to your language
				lastBtnTooltipTxt:"Go to last video",        //translate "Go to last video" to your language
				firstBtnTooltipTxt:"Go to first video",      //translate "Go to first video" to your language
				nextBtnTooltipTxt:"Play next video",         //translate "Play next video" to your language
				previousBtnTooltipTxt:"Play previous video", //translate "Play previous video" to your language
				shuffleBtnOnTooltipTxt:"Shuffle on",         //translate "Shuffle on" to your language
				shuffleBtnOffTooltipTxt:"Shuffle off",       //translate "Shuffle off" to your language
				nowPlayingTooltipTxt:"PLAYING",          //translate "PLAYING" to your language


				//manual playlist
				videos:[
					
					{
						videoType:"HTML5",
                       title:"TRT 1" ,
                       url:"http://135.125.234.9:8081/trt1/index.m3u8",	
                       thumbImg:"image/trt1.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ATV" ,
                       url:"http://66.160.192.241/atvturk/index.m3u8",	
                       thumbImg:"image/atv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"SHOW TV" ,
                       url:"http://135.125.234.9:8081/showtv/index.m3u8",	
                       thumbImg:"image/showtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL D" ,
                       url:"http://135.125.234.9:8081/kanald/index.m3u8",	
                       thumbImg:"image/kanald.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"STAR TV" ,
                       url:"http://135.125.234.9:8081/startv/index.m3u8",	
                       thumbImg:"image/startv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"FOX TV" ,
                       url:"http://135.125.234.9:8081/foxtv/index.m3u8",	
                       thumbImg:"image/foxtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV8" ,
                       url:"https://tv8-live.daioncdn.net/tv8/tv8.m3u8",	
                       thumbImg:"image/tv8.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV8-5" ,
                       url:"http://a91bb716.megogo.xyz/iptv/NFFLRXMKSXRPPQ/6898/index.m3u8",	
                       thumbImg:"image/tv85.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 7" ,
                       url:"http://135.125.234.9:8081/kanal7/index.m3u8",	
                       thumbImg:"image/kanal7.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TEVE 2" ,
                       url:"http://135.125.234.9:8081/teve2/index.m3u8",	
                       thumbImg:"image/teve2.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BEYAZ TV" ,
                       url:"http://135.125.234.9:8081/beyaztv/index.m3u8",	
                       thumbImg:"image/beyaztv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"360 TV" ,
                       url:"https://turkmedya-live.ercdn.net/tv360/tv360.m3u8",	
                       thumbImg:"image/360tv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TLC" ,
                       url:"http://135.125.234.9:8081/tlc/index.m3u8",	
                       thumbImg:"image/tlc.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"DMAX" ,
                       url:"http://135.125.234.9:8081/dmax/index.m3u8",	
                       thumbImg:"image/dmax.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT 2" ,
                       url:"http://167.114.115.233:8080/trt2fhd/index.m3u8",	
                       thumbImg:"image/trt2.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT TÜRK" ,
                       url:"http://135.125.234.9:8081/trtturk/index.m3u8",	
                       thumbImg:"image/trtturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT AVAZ" ,
                       url:"http://135.125.234.9:8081/trtavaz/index.m3u8",	
                       thumbImg:"image/trtavaz.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Ulusal",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"HALK TV" ,
                       url:"http://135.125.234.9:8081/halktv/index.m3u8",	
                       thumbImg:"image/halktv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KRT TV" ,
                       url:"http://135.125.234.9:8081/krttv/index.m3u8",	
                       thumbImg:"image/krt.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TELE 1" ,
                       url:"http://135.125.234.9:8081/tele1/index.m3u8",	
                       thumbImg:"image/tele1.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"NTV" ,
                       url:"https://dogus-live.daioncdn.net/ntv/ntv.m3u8",	
                       thumbImg:"image/ntv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"HABER TÜRK" ,
                       url:"http://135.125.234.9:8081/haberturk/index.m3u8",	
                       thumbImg:"image/haberturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"CNN TÜRK" ,
                       url:"http://135.125.234.9:8081/cnnturk/index.m3u8",	
                       thumbImg:"image/cnnturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BLOOMBERG HT" ,
                       url:"http://135.125.234.9:8081/bloomberght/index.m3u8",	
                       thumbImg:"image/bloomberght.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"HABER GLOBAL" ,
                       url:"http://135.125.234.9:8081/haberglobal/index.m3u8",	
                       thumbImg:"image/haberglobal.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT HABER" ,
                       url:"http://135.125.234.9:8081/trthaber/index.m3u8",	
                       thumbImg:"image/trthaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ULUSAL KANAL" ,
                       url:"http://135.125.234.9:8081/ulusalkanal/index.m3u8",	
                       thumbImg:"image/ulusalkanal.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TGRT HABER" ,
                       url:"http://135.125.234.9:8081/tgrthaber/index.m3u8",	
                       thumbImg:"image/tgrthaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TGRT EU" ,
                       url:"https://ensonhaber-live.ercdn.net/tgrteu/tgrteu.m3u8",	
                       thumbImg:"image/tgrteu.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"24 TV" ,
                       url:"https://turkmedya-live.ercdn.net/tv24/tv24.m3u8",	
                       thumbImg:"image/24tv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TBMM" ,
                       url:"https://meclistv-live.ercdn.net/meclistv/meclistv.m3u8",	
                       thumbImg:"image/tbmmtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV100" ,
                       url:"http://135.125.234.9:8081/tv100/index.m3u8",	
                       thumbImg:"image/tv100.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TURK HABER" ,
                       url:"https://edge1.socialsmart.tv/turkhaber/bant1/playlist.m3u8",	
                       thumbImg:"image/turkhaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Haber",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT BELGESEL" ,
                       url:"http://135.125.234.9:8081/trtbelgesel/index.m3u8",	
                       thumbImg:"image/trtbelgesel.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TGRT BELGESEL" ,
                       url:"http://135.125.234.9:8081/tgrtbelgesel/index.m3u8",	
                       thumbImg:"image/tgrtbelgesel.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"YABAN TV" ,
                       url:"https://yayin1.canlitv.day/live1/yabantv/playlist.m3u8",	
                       thumbImg:"image/yabantv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ÇİFTCİ TV" ,
                       url:"http://yerelmedya.tv:1935/ciftcitv/bant1/playlist.m3u8",	
                       thumbImg:"image/ciftcitv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KÖY TV" ,
                       url:"https://yayin1.canlitv.day/canlitv/koytv/playlist.m3u8",	
                       thumbImg:"image/koytv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TARIM TV" ,
                       url:"https://usd.nocvp.com/asset/8gUsrzk8/chunklist.m3u8",	
                       thumbImg:"image/tarimtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Belgesel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT ÇOCUK" ,
                       url:"http://135.125.234.9:8081/trtcocuk/index.m3u8",	
                       thumbImg:"image/trtcocuk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"MINIKA GO" ,
                       url:"http://iptvmasterlink.dyndns.org:8080/MinikaGo/playlist.m3u8",	
                       thumbImg:"image/minikago.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"MINIKA ÇOCUK" ,
                       url:"http://mfe.cliptv.az/hls/Minika_Cocuk_SD.ism/master.m3u8",	
                       thumbImg:"image/minikacocuk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"CARTOON NETWORK" ,
                       url:"http://iptvmasterlink.dyndns.org:8080/CartoonNetwork/playlist.m3u8",	
                       thumbImg:"image/cartoonnetwork.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"EBA İLKOKUL" ,
                       url:"https://tv-e-okul00.medya.trt.com.tr/master.m3u8",	
                       thumbImg:"image/ebatv-ilkokul.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"EBA ORTAOKUL" ,
                       url:"https://tv-e-okul01.medya.trt.com.tr/master.m3u8",	
                       thumbImg:"image/ebatv-ortaokul.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"EBA LİSE" ,
                       url:"https://tv-e-okul02.medya.trt.com.tr/master.m3u8",	
                       thumbImg:"image/ebatv-lise.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Çocuk",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT MÜZIK" ,
                       url:"http://135.125.234.9:8081/trtmuzik/index.m3u8",	
                       thumbImg:"image/trtmuzik.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"DREAM TURK" ,
                       url:"https://daddy.yurendtv.biz.id/https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8",	
                       thumbImg:"image/dreamtvturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TATLISES TV" ,
                       url:"https://waw1.artiyerelmedya.net/tatlisestv/bant1/playlist.m3u8",	
                       thumbImg:"image/tatlisestv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TEMPO TV" ,
                       url:"https://h59.artiyerelmedya.net/tempotv/bant1/chunks.m3u8",	
                       thumbImg:"image/tempotv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TMB TV" ,
                       url:"http://mfe.cliptv.az/hls/TMB_TV_SD.ism/master.m3u8",	
                       thumbImg:"image/tmbtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"MILYON TV" ,
                       url:"https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8",	
                       thumbImg:"image/milyontv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Muzik",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BEINSPORT HABER" ,
                       url:"https://daddy.yurendtv.biz.id/https://59c7ea6bec1c6.streamlock.net/filboxlive/beinsporthaber.stream/playlist.m3u8",	
                       thumbImg:"image/beinsportshaber.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT SPOR" ,
                       url:"http://66.160.192.241/trtspor/index.m3u8",	
                       thumbImg:"image/trtspor.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TRT SPOR YILDIZ" ,
                       url:"https://daddy.yurendtv.biz.id/https://mn-nl.mncdn.com/blutv_trtsporyildiz/live.m3u8",	
                       thumbImg:"image/trtspor-yildiz.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"A SPOR" ,
                       url:"http://66.160.192.241/aspor/index.m3u8",	
                       thumbImg:"image/aspor.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"CBC SPORT" ,
                       url:"https://daddy.yurendtv.biz.id/https://59c7ea6bec1c6.streamlock.net/filboxlive/cbcsport.stream/playlist.m3u8",	
                       thumbImg:"image/cbcsport.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"SPORTS TV" ,
                       url:"https://live.sportstv.com.tr/hls/low/sportstv_fhd/index.m3u8",	
                       thumbImg:"image/sportstv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"FB TV" ,
                       url:"https://daddy.yurendtv.biz.id/https://59c7ea6bec1c6.streamlock.net/filboxlive/fbtv.stream/playlist.m3u8",	
                       thumbImg:"image/fbtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"GS TV" ,
                       url:"https://owifavo5.rocketcdn.com/gstv/gstv.smil/master.m3u8",	
                       thumbImg:"image/gstv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TAY TV" ,
                       url:"https://daddy.yurendtv.biz.id/https://mn-nl.mncdn.com/blutv_taytv2/live.m3u8",	
                       thumbImg:"image/taytv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Spor",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"CEM TV" ,
                       url:"https://daddy.yurendtv.biz.id/https://59c7ea6bec1c6.streamlock.net/filboxlive/cemtv.stream/playlist.m3u8",	
                       thumbImg:"image/cemtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"DRT Denizli" ,
                       url:"https://broadcasttr.com:446/drt/bant1/chunklist.m3u8",	
                       thumbImg:"image/drt-denizli.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"DEHA TV" ,
                       url:"http://waw1.artiyerelmedya.net:1935/dehatv/bant1/playlist.m3u8",	
                       thumbImg:"image/dehatv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV DEN" ,
                       url:"http://canli.tvden.com.tr/hls/live.m3u8",	
                       thumbImg:"image/tvden.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"PAMUKKALE TV" ,
                       url:"http://ms1.sanlisoy.com:1935/pamukkaletv/pamukkaletv/playlist.m3u8",	
                       thumbImg:"image/pamukkaletv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"EGE Live TV" ,
                       url:"https://yayin1.canlitv.day/canlitv/egelivetv/chunklist.m3u8",	
                       thumbImg:"image/egetv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ADA TV" ,
                       url:"https://edge1.socialsmart.tv/adatv/bant1/chunks.m3u8",	
                       thumbImg:"image/adatv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ALTAŞ TV" ,
                       url:"https://edge1.socialsmart.tv/live/altastv/bant1/chunklist.m3u8",	
                       thumbImg:"image/altastv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"AS TV" ,
                       url:"https://waw2.artiyerelmedya.net/astv/bant1/playlist.m3u8",	
                       thumbImg:"image/astv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"AKSU TV" ,
                       url:"https://waw2.artiyerelmedya.net/aksutv/bant1/playlist.m3u8",	
                       thumbImg:"image/aksutv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"AKILLI TV" ,
                       url:"http://iptvmasterlink.dyndns.org:8080/AkilliTv/playlist.m3u8",	
                       thumbImg:"image/akillitv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BAHAR TÜRK TV" ,
                       url:"http://baharturktv.radyotvyayini.com:1935/baharturktv/baharturktv/playlist.m3u8",	
                       thumbImg:"image/baharturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BENGÜ TÜRK TV" ,
                       url:"https://daddy.yurendtv.biz.id/https://59c7ea6bec1c6.streamlock.net/filboxlive/benguturk.stream/playlist.m3u8",	
                       thumbImg:"image/benguturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"BEYKENT TV" ,
                       url:"https://yayin30.haber100.com/live/beykenttv/chunklist.m3u8",	
                       thumbImg:"image/beykenttv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ÇAY TV" ,
                       url:"https://edge1.socialsmart.tv/caytv/bant1/playlist.m3u8",	
                       thumbImg:"image/caytv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ES TV" ,
                       url:"http://waw2.artiyerelmedya.net/estv/bant1/playlist.m3u8",	
                       thumbImg:"image/estv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ER TV" ,
                       url:"http://waw1.artiyerelmedya.net:1935/ertv/bant1/playlist.m3u8",	
                       thumbImg:"image/ertv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ERT ŞAH TV" ,
                       url:"http://win20.yayin.com.tr/ertsahtv/ertsahtv/playlist.m3u8",	
                       thumbImg:"image/ertsahtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"GAZIANTEP OLAY TV" ,
                       url:"http://yerelmedya.tv:1935/olaytv/bant1/playlist.m3u8",	
                       thumbImg:"image/gaziantepolaytv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL AVRUPA" ,
                       url:"http://51.15.2.151/hls/kanalavrupa.m3u8",	
                       thumbImg:"image/kanal-avrupa.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 3" ,
                       url:"http://yerelmedya.tv:1935/kanal3/bant1/chunks.m3u8",	
                       thumbImg:"image/kanal3.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 5" ,
                       url:"https://yayin1.canlitv.day/canlitv/kanal5/chunklist.m3u8",	
                       thumbImg:"image/kanal5.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 15" ,
                       url:"http://yerelmedya.tv:1935/kanal15/bant1/playlist.m3u8",	
                       thumbImg:"image/kanal15.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 23" ,
                       url:"http://yerelmedya.tv:1935/kanal23/bant1/playlist.m3u8",	
                       thumbImg:"image/kanal23.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 33" ,
                       url:"https://daddy.yurendtv.biz.id/https://istanbul.tvizlehd.com/live/kanal33.m3u8",	
                       thumbImg:"image/kanal33.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL 68" ,
                       url:"http://waw1.artiyerelmedya.net:1935/kanal68/bant1/playlist.m3u8",	
                       thumbImg:"image/kanal68.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL FIRAT" ,
                       url:"http://yerelmedya.tv:1935/kanalfirat/bant1/playlist.m3u8",	
                       thumbImg:"image/kanalfirat.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KANAL V" ,
                       url:"https://waw1.artiyerelmedya.net/kanalv/bant1/chunks.m3u8",	
                       thumbImg:"image/kanalv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KENTTÜRK TV" ,
                       url:"http://waw1.artiyerelmedya.net:1935/38kenttv/bant1/playlist.m3u8",	
                       thumbImg:"image/kentturk.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KIBRIS GENÇ TV" ,
                       url:"https://yayin1.canlitv.day/canlitv/kibrisgenctv/chunklist.m3u8",	
                       thumbImg:"image/kibrisgenctv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"KON TV" ,
                       url:"https://daddy.yurendtv.biz.id/https://mn-nl.mncdn.com/blutv_kontv2/live_720p2000000kbps/index.m3u8",	
                       thumbImg:"image/kontv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"LINE TV" ,
                       url:"https://broadcasttr.com:446/linetv/bant1/playlist.m3u8",	
                       thumbImg:"image/linetv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"MANISA TV" ,
                       url:"https://yayin.manisatv.com.tr/live/stream.m3u8",	
                       thumbImg:"image/manisatv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"MERCAN TV" ,
                       url:"http://yerelmedya.tv:1935/mercantv/bant1/playlist.m3u8",	
                       thumbImg:"image/mercantv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"RUMELI TV" ,
                       url:"https://edge1.socialsmart.tv/tekrumelitv/bant1/chunks.m3u8",	
                       thumbImg:"image/rumelitv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"SUN TV" ,
                       url:"http://yerelmedya.tv:1935/sunrtv/bant1/chunks.m3u8",	
                       thumbImg:"image/sun-rtv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV1" ,
                       url:"https://edge1.socialsmart.tv/tv1/bant1/chunks.m3u8",	
                       thumbImg:"image/tv1.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV4" ,
                       url:"https://turkmedya-live.ercdn.net/tv4/tv4.m3u8",	
                       thumbImg:"image/tv4.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV5" ,
                       url:"https://yayin1.canlitv.day/canlitv/tv5/playlist.m3u8",	
                       thumbImg:"image/tv5.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV41" ,
                       url:"http://stream.taksimbilisim.com:1935/tv41/bant1/TV41.m3u8",	
                       thumbImg:"image/tv41.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV52" ,
                       url:"http://stream.taksimbilisim.com:1935/tv52/smil:tv52.smil/playlist.m3u8",	
                       thumbImg:"image/tv52.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV264" ,
                       url:"https://mc1.mediatriple.net/videoonlylive/mtdxkkitgbrckilive/broadcast_5ee244263fd6d.smil/playlist.m3u8",	
                       thumbImg:"image/tv264.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV KAYSERI" ,
                       url:"https://yayin1.canlitv.day/canlitv/tvkayseri/playlist.m3u8",	
                       thumbImg:"image/tvkayseri.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TEK RUMELI TV" ,
                       url:"https://edge1.socialsmart.tv/tekrumelitv/bant1/chunks.m3u8",	
                       thumbImg:"image/tekrumeli.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TON TV" ,
                       url:"http://yerelmedya.tv:1935/tontv/bant1/playlist.m3u8",	
                       thumbImg:"image/tontv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"TV-NET" ,
                       url:"https://tv.ensonhaber.com/tv/tr/tvnet/index.m3u8",	
                       thumbImg:"image/tvnet.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"UÇANKUŞ" ,
                       url:"https://ucankus-live.cdnnew.com/ucankus/ucankus.m3u8",	
                       thumbImg:"image/ucankustv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"ÜLKE TV" ,
                       url:"http://iptvmasterlink.dyndns.org:8080/UlkeTv/playlist.m3u8",	
                       thumbImg:"image/ulketv.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					},
					{
						videoType:"HTML5",
                       title:"VIZYON58" ,
                       url:"https://waw2.artiyerelmedya.net/vizyon58/bant1/playlist.m3u8",	
                       thumbImg:"image/vizyon58.png",		

                        ccUrl: "",
						enable_mp4_download:"no",
						imageTimer:4,
						description:"Yerel",
						info:"Turkey"
					}

				]
			});
		});