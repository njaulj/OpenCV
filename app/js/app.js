
var ionicApp = angular.module('ionicApp', ['ionic'])

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
.controller('HomeCtrl',['$scope','$ionicPopover',function($scope,$ionicPopover){
  $scope.resume = {
    baseInfo:{
      chineseName:'刘君',
      englishName:'Jack Willson',
      job:'前端开发工程师'
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

 


  $scope.lightStars = 0

  $scope.light = function(count){
    $scope.lightStars = count
  }

  $scope.del_this = function(){
    console.log('del btn clicked')
  }

  $scope.save = function(){
    // save  $scope.resume
  }

  $scope.add = function(a,b){
    a.push(b)
  }

  $scope.delete = function(a,b){
    // delete one from collections
  }

  $scope.order = function(a,b){
    // order a by b
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


}])
.controller('ResumeCtrl',['$scope','$ionicPopover','$timeout',function($scope,$ionicPopover,$timeout){
    $scope.about = function(){
      window.location.href="https://github.com/njaulj/OpenCV"
    }  

  $scope.resume = {
    baseInfo:{
      chineseName:'刘君',
      englishName:'Jack Willson',
      job:'前端开发工程师'
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