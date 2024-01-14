/***********************************


[rewrite_local]
  
# ～ Bilibili大会员（2024-01-14）@ddgksf2013
^https?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player.*\.(v3|v2|v1).Play(URL|View|er).*$ url script-request-header BilibiliProCrack.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'buvid3=D3E51735-07CC-5290-C1AF-5FFCA61353A580083infoc; b_nut=1685280180; i-wanna-go-back=-1; b_ut=7; _uuid=210C9810310-D9CC-D41D-D8107-82E24FAC10101341568infoc; FEED_LIVE_VERSION=V8; buvid4=9F9B1633-0AB6-FBF3-D3CD-2AF039C4F47281320-023052821-Mk4wjKcJQ45BHudCZZTJgIr9o1TCEoJLQjNfiKikkgTGpDdmXZYcSg%3D%3D; header_theme_version=CLOSE; rpdid=0zbfAHMGwy|1agp4W7L9|3U|3w1Q3hdM; buvid_fp_plain=undefined; balh_server_inner=__custom__; balh_is_closed=; DedeUserID=72262504; DedeUserID__ckMd5=733dade0a3c07530; CURRENT_QUALITY=120; CURRENT_BLACKGAP=0; PVID=1; enable_web_push=DISABLE; CURRENT_FNVAL=4048; fingerprint=94647002b2507512f163d04674589538; SESSDATA=892619c2%2C1720531736%2C9c669%2A11CjAPHo4kRTSvLmB2xvsb7JsmEhs8MGqRcaJybcBXlqlNALpaSIqKHU1rJm0ytasQE5QSVlBkcUVqd25DM0JFT1Z0MXZSQkVWejR2SnhMNGJseTNsNjR1TFZCNW9USUhPQmZwXzdPcTZERi1qVDRmZmhHM053VEJzTy12dXplTGZXN1llQjNXcmFBIIEC; bili_jct=7b30d5c1c60fccfe6f667b68e2e0b8ce; innersign=0; b_lsid=54BD9812_18D06210DA2; bp_video_offset_72262504=886329255331364935; sid=5ugge77o; home_feed_column=4; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDU0NjgzMDAsImlhdCI6MTcwNTIwOTA0MCwicGx0IjotMX0.a1Ci7YpkzLQetdDjMB3N21rOHnnASkZxY-goadKk8kc; bili_ticket_expires=1705468240; browser_resolution=1060-2592; buvid_fp=D3E51735-07CC-5290-C1AF-5FFCA61353A580083infoc';
modifiedHeaders['x-bili-device-bin'] = '';
modifiedHeaders['Authorization'] = '';
modifiedHeaders['User-Agent'] = '';
modifiedHeaders['buvid'] = '';
modifiedHeaders['x-bili-metadata-bin'] = '';
modifiedHeaders['x-bili-locale-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
modifiedHeaders['x-bili-fawkes-req-bin'] = '';
modifiedHeaders['x-bili-trace-id'] = '3171f722cfcdc6772ac92efdce65a36c';
modifiedHeaders['x-bili-exps-bin'] = '';
$done({'headers': modifiedHeaders});