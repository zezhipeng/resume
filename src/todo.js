/**
 * Created by tf on 2016/2/22.
 */
var emojione = require("emojione")
var socket = io()
console.log(emojione.toShort(":grin:"))
angular.module("todo",["ngSanitize"])
    .controller("server",function($scope){
        var angularjs = ":grin:在学会angular之后，似乎就没怎么用过(jquery)ajax了，因为angular对于数据库的交互实在太方便了，也尝试过angular的$route的单页app，但是觉得和自己原来学的一套不是和契合，所以多数情况对于angular都是与数据库交互，特别是自己写的那些token api。"
        $scope.angularjs = emojione.toImage(angularjs)
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
