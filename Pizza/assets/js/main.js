var app = angular.module('myApp', []);

    app.controller('myCtrl', function($scope) {
        var arr=[];
  		var obj1={};
  		obj1.title="Margherita";
        obj1.info="A classic delight with 100% Real mozzarella cheese";
        obj1.img="assets/images/item1.jpg"  
        obj1.price="199";

        var obj2={};
        obj2.title="Margherita";
        obj2.info="A classic delight with 100% Real mozzarella cheese";
        obj2.img="assets/images/item2.png"  
        obj2.price="199";

        var obj3={};
        obj3.title="Margherita";
        obj3.info="A classic delight with 100% Real mozzarella cheese";
        obj3.img="assets/images/item1.jpg"  
        obj3.price="199";

        var obj4={};
        obj4.title="Margherita";
        obj4.info="A classic delight with 100% Real mozzarella cheese";
        obj4.img="assets/images/item1.jpg"  
        obj4.price="199";



        arr.push(obj1);
        arr.push(obj2);
        arr.push(obj3);
        arr.push(obj4);

        

        $scope.menuData=arr;

    });