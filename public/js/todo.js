/**
 * Created by tf on 2016/2/22.
 */
var socket = io()
console.log(emojione.toShort(":grin:"))
angular.module("todo",["ngSanitize"])
    .controller("server",function($scope){
        $scope.nodeone = emojione.toImage("在2014年初的时候，刚开始学习html，最开始接触的是apache和php，数据库也是用的mysql，前端也只会javascript。同年11月的时候遇到了nodejs。便开始学习nodejs+expressjs+jade的架构，数据库也从慢慢从mysql变成了mongodb:smiling_imp:。")
        $scope.nodetwo = emojione.toImage("后期构建了服务器的token api，使用的是passport中间件，方便以后手机端或者其他服务器的数据获取。同时博客上开始写一些小例子:muscle::muscle:")
        $scope.nodethree= emojione.toImage("流媒体服务器最初使用的FMS，之后换成了wowza。推流方面开始接触ffmpeg:spy::tophat:，但是由于ffmpeg相对来说太过复杂，没有深入了解。只能做到基本的转码，推流，截图等。")
        $scope.angularjs = emojione.toImage(":bus::bus::bus:在学会angular之后，似乎就没怎么用过(jquery)ajax了，因为angular对于数据库的交互实在太方便了:laughing:，也尝试过angular的$route的单页app，但是觉得和自己原来学的一套不是和契合，所以多数情况对于angular都是与数据库交互，特别是自己写的那些token api。")
        $scope.angularjstwo = emojione.toImage("但是由于angular的脏检查(dirty check)的问题，导致angular的性能问题，没办法，有些时候便不好使用angular(页面上过多的数据绑定):anguished:，之后开始尝试react:bullettrain_side::airplane:。")
        $scope.react=emojione.toImage("react相对来说很好上手，虽然踩过很多的坑，也尝试过许多，比如angular+react,或者expressjs直接服务器渲染react组件等:footprints::footprints::footprints:，最终还是决定使用比较通常的方式，webpack通过babel-loader编译基于es6的react。顺便提一下angular2，在angular2测试版出来之后也尝试了一下，性能很好，许多方面很react很相似（组件生命周期的概念等），只是觉得路上的:poop:坑太多了:poop:，就没有怎么往那个方向走。")
        $scope.process="2014年2月大四下开始实习，最初是作为一个直播设备的技术支持（叫liveu的产品），由于liveu的设备后端服务器内置ffmpeg的推流功能，以至老板想要做一个自己的流媒体直播网站。"
        $scope.process2 ="同年4月开始着手搭建公司的流媒体网站系统。最初接触的是Adobe的FMS以及apache，php，html，js，css以及mysql。"
        $scope.process3 = "大约11月开始学习到nodejs，expressjs以及jade，数据库也渐渐转变为mongodb。流媒体服务器也改为wowza服务器。"
        $scope.process4="2015年3月完成网站的重构。之后开始对于网站的功能进行扩充。主要通过expressjs的中间件，对于请求的ip，域名等进行记录和解析"
        $scope.process5="6月左右开始学习angular，同年8月利用angular，在网站的前端与后端的交互方面增加了许多页面，主要是管理员页面对于用户等进行的管理"
        $scope.process6="9月开始学习react，之后学习到了webpack。"
        $scope.process7="12月开始对于网站的token api进行编写，让app开发人员可以获取网站数据，添加以及修改"
        $scope.process8="2016年2月离职"


        socket.on("memory",function(cb){
            $scope.memory = cb+"%"
            console.log($scope.memory)
            $scope.$apply()
        })

        setInterval(function(){
            socket.emit("memory",{})
        },2000)
    })
    .filter('to_trusted',function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }
)
