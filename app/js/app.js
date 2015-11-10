
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
        awards:'参加SAT小组，研发肉品跟踪追溯系统'
      }
    ],
    workInfo:[
      {
        start_date:'2010.08',
        end_date:'2015.06',
        company:'中石化南京工程有限公司',
        position:'软件开发工程师',
        highlights:'负责公司内外网开发'
      },
      {
        start_date:'2015.06',
        end_date:'至今',
        company:'杭州蔓藤网络科技有限公司',
        position:'高级Web开发工程师',
        highlights:'负责平台开发，构建'
      }
    ],
    skills:[
      {
        skill_name:'JavaScript',
        stars:5
      },
      {
        skill_name:'Html',
        stars:4
      },
      {
        skill_name:'Css',
        stars:3
      },
      {
        skill_name:'Nodejs',
        stars:4
      },
      {
        skill_name:'Angular+Ionic',
        stars:5
      },
      {
        skill_name:'React',
        stars:3
      }
    ],
    contact:{
      email:'18251888949@163.com',
      phone:'18251888949',
      github:'https://github.com/njaulj',
      website:'https://www.baidu.com'
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
        job:'高级 Web 开发工程师'
      },
      eduInfo:[
        {
          start_date:'2006.09',
          end_date:'2010.06',
          university:'南京农业大学',
          studyType:'学士学位',
          awards:'参加SAT小组，研发肉品跟踪追溯系统'
        }
      ],
      workInfo:[
        {
          start_date:'2010.08',
          end_date:'2015.06',
          company:'中石化南京工程有限公司',
          position:'软件开发工程师',
          highlights:'负责公司内外网开发'
        },
        {
          start_date:'2015.06',
          end_date:'至今',
          company:'杭州蔓藤网络科技有限公司',
          position:'高级Web开发工程师',
          highlights:'负责平台开发，构建'
        }
      ],
      skills:[
        {
          skill_name:'JavaScript',
          stars:5
        },
        {
          skill_name:'Html',
          stars:4
        },
        {
          skill_name:'Css',
          stars:3
        },
        {
          skill_name:'Nodejs',
          stars:4
        },
        {
          skill_name:'Angular+Ionic',
          stars:5
        },
        {
          skill_name:'React',
          stars:3
        }
      ],
      contact:{
        email:'18251888949@163.com',
        phone:'18251888949',
        github:'https://github.com/njaulj',
        website:'https://www.baidu.com'
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