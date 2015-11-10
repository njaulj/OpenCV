
var ionicApp = angular.module('ionicApp', ['ionic'])
.constant('Config',{
    host:'http://localhost:4000',
    resume:{
    baseInfo:{
      chineseName:'刘君',
      englishName:'Jack Willson',
      job:'前端开发工程师',
      intro:'热爱开源 喜欢动手实践'
    },
    eduInfo:[
      {
        start_date:'2006.09',
        end_date:'2010.06',
        university:'南京农业大学',
        studyType:'学士学位',
        awards:''
      }
    ],
    workInfo:[
      {
        start_date:'2010.08',
        end_date:'2015.06',
        company:'中石化南京工程有限公司',
        position:'软件开发工程师',
        highlights:'主要负责公司网站、软件、数据库的开发工作；'
      },
      {
        start_date:'2015.06',
        end_date:'至今',
        company:'杭州蔓藤网络科技有限公司',
        position:'高级Web开发工程师',
        highlights:'负责公司电商平台开发，以下是这段时间以来开发投入使用的产品：1.基于高德LBS广告投放管理后台、库房管理后台。2.移动端H5热卖商城。3.重构了国产ECSHOP开源商城移动版。4.电商平台标准化商品库管理后台'
      }
    ],
    skills:[
      {
        skill_name:'JavaScript',
        stars:4
      },
      {
        skill_name:'Html',
        stars:4
      },
      {
        skill_name:'Css',
        stars:4
      },
      {
        skill_name:'Nodejs',
        stars:4
      },
      {
        skill_name:'MEAN架构',
        stars:4
      },
      {
        skill_name:'Angular+Ionic',
        stars:4
      },
      {
        skill_name:'React',
        stars:3
      },
      {
        skill_name:'React Native',
        stars:2
      },
      {
        skill_name:'MongoDb',
        stars:3
      },
      {
        skill_name:'Postgresql',
        stars:3
      },
      {
        skill_name:'Redis',
        stars:3
      },
      {
        skill_name:'Oracle',
        stars:3
      }
    ],
    contact:{
      email:'18251888949@163.com',
      phone:'18251888949',
      github:'https://github.com/njaulj',
      website:''
    }
  }
  }
)

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left');
    $ionicConfigProvider.navBar.alignTitle('center')
    //$ionicConfigProvider.views.maxCache(0);
    //$ionicConfigProvider.platform.android.views.maxCache(0);
    $ionicConfigProvider.templates.maxPrefetch(0);

    $stateProvider
        .state('home', {
          url: "/home",
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        })
        .state('resume', {
          url: "/resume",
          templateUrl: "templates/resume.html",
          controller: 'ResumeCtrl'
        })


    $urlRouterProvider.otherwise("/resume");
  })
.controller('HomeCtrl',['$scope','$ionicPopover','$timeout','EduService','Config',function($scope,$ionicPopover,$timeout,EduService,Config){
      Config.host =232  
      console.log(Config.host)  

      $scope.showtime  = true

      $timeout(function(){
          $scope.showtime = false
      },5000)


      

      $scope.$on('$ionicView.enter',function(){
        $scope.copyIntro = ''
        var length = $scope.resume.baseInfo.intro.length
        var i = 0
        
        var func = function(){$timeout(function(){
            $scope.copyIntro +=$scope.resume.baseInfo.intro[i]
              i++
              if(i<length){
                func()          
                }
            },200)
        }
        func()
      })


  $scope.resume = Config.resume

 



  $scope.light = function(count){
    $scope.skill.data.stars = count
  }

  

  $scope.del_this = function(a,index){
    // console.log(index)
     a.splice(index,1)
     $scope.save()
  }


  $scope.tabIndex = 1
  $scope.tabSelect = function(index){
    $scope.tabIndex = index
  }

  $scope.about = function(){
    window.location.href="https://github.com/njaulj/OpenCV"
  }

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  $scope.sendResume = function(){
    alert('一键发送简历功能稍后上线')
  }

  $scope.edu = {
    insert:function(){
      /*var promise = EduService.ajax_insert(this.data)
      promise
      .then(function(data){
        console.log(data)
      },function(data){
        console.log('服务器/数据库故障')
      })*/
      var data = this.data
      $scope.resume.eduInfo.push(data)
      Config.resume = $scope.resume
    },
    data:{
      start_date:'',
      end_date:'',
      university:'',
      studyType:'',
      awards:''
    }
  }

  $scope.work = {
    insert:function(){
      /*var promise = WorkService.ajax_insert(this.data)
      promise
      .then(function(data){
        console.log(data)
      },function(data){
        console.log('服务器/数据库故障')
      })*/
      var data = this.data
      $scope.resume.workInfo.push(data)
      Config.resume = $scope.resume
    },
    data:{
      start_date:'',
      end_date:'',
      position:'',
      company:'',
      highlights:''
    }
  }

  $scope.skill = {
    insert:function(){
      // var promise = SkillService.ajax_insert(this.data)
      // promise
      // .then(function(data){
      //   console.log(data)
      // },function(data){
      //   console.log('服务器/数据库故障')
      // })
    var data = this.data
    $scope.resume.skills.push(data)
    Config.resume = $scope.resume
    },
    data:{
      skill_name:'',
      stars:0
    }
  }

  $scope.contact = {
    update:function(){
      // var promise = SkillService.ajax_update(this.data)
      // promise
      // .then(function(data){
      //   console.log(data)
      // },function(data){
      //   console.log('服务器/数据库故障')
      // })
      $scope.resume.contact = this.data
      Config.resume = $scope.resume
    },
    data:{
      email:$scope.resume.contact.email,
      github:$scope.resume.contact.github,
      website:$scope.resume.contact.website,
      phone:$scope.resume.contact.phone
    }
  }

  $scope.user = {
    update:function(){
      // var promise = SkillService.ajax_update(this.data)
      // promise
      // .then(function(data){
      //   console.log(data)
      // },function(data){
      //   console.log('服务器/数据库故障')
      // })
    $scope.resume.baseInfo = this.data
    Config.resume = $scope.resume
    $scope.$broadcast('$ionicView.enter')
    },
    data:{
      chineseName:$scope.resume.baseInfo.chineseName,
      englishName:$scope.resume.baseInfo.englishName,
      job:$scope.resume.baseInfo.job,
      intro:$scope.resume.baseInfo.intro
    }
  }


}])
.controller('ResumeCtrl',['$scope','$ionicPopover','$timeout','Config',function($scope,$ionicPopover,$timeout,Config){
    $scope.about = function(){
      window.location.href="https://github.com/njaulj/OpenCV"
    }  




  $scope.resume = Config.resume
  

    $scope.$on('$ionicView.enter',function(){
      $scope.copyIntro = ''
      var length = $scope.resume.baseInfo.intro.length
      var i = 0
      
      var func = function(){$timeout(function(){
          $scope.copyIntro +=$scope.resume.baseInfo.intro[i]
            i++
            if(i<length){
              func()          
              }
          },200)
      }
      func()
    })

    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });

    $scope.sendResume = function(){
      alert('一键发送简历功能稍后上线')
    }

}])
.service('UserService',['$http','$q','Config',function($http,$q,Config){
  console.log(Config.host)
  var ajax_update = function(data,success,error){
    var defered = $q.defer()
    $http({method:'POST',url:Config.host+'/api/edu/insert',data:data})
    .success(function(data){
      defered.resolve(data)
    })
    .error(function(data,status,headers,config){
      defered.reject(data)
    })

    return defered.promise
  }


  return {
    ajax_update:ajax_update
  }
}])
.service('EduService',['$http','$q','Config',function($http,$q,Config){
  console.log(Config.host)
  var ajax_insert = function(data,success,error){
    var defered = $q.defer()
    $http({method:'POST',url:Config.host+'/api/edu/insert',data:data})
    .success(function(data){
      defered.resolve(data)
    })
    .error(function(data,status,headers,config){
      defered.reject(data)
    })

    return defered.promise
  }


  return {
    ajax_insert:ajax_insert
  }
}])
.service('ContactService',['$http','$q','Config',function($http,$q,Config){
  console.log(Config.host)
  var ajax_update = function(data,success,error){
    var defered = $q.defer()
    $http({method:'POST',url:Config.host+'/api/contact/insert',data:data})
    .success(function(data){
      defered.resolve(data)
    })
    .error(function(data,status,headers,config){
      defered.reject(data)
    })

    return defered.promise
  }


  return {
    ajax_update:ajax_update
  }
}])
.service('SkillService',['$http','$q','Config',function($http,$q,Config){
  console.log(Config.host)
  var ajax_insert = function(data,success,error){
    var defered = $q.defer()
    $http({method:'POST',url:Config.host+'/api/skill/insert',data:data})
    .success(function(data){
      defered.resolve(data)
    })
    .error(function(data,status,headers,config){
      defered.reject(data)
    })

    return defered.promise
  }


  return {
    ajax_insert:ajax_insert
  }
}])
.service('WorkService',['$http','$q','Config',function($http,$q,Config){
  console.log(Config.host)
  var ajax_insert = function(data,success,error){
    var defered = $q.defer()
    $http({method:'POST',url:Config.host+'/api/work/insert',data:data})
    .success(function(data){
      defered.resolve(data)
    })
    .error(function(data,status,headers,config){
      defered.reject(data)
    })

    return defered.promise
  }


  return {
    ajax_insert:ajax_insert
  }
}])