angular.module('dynamicFormApp', []).controller('DynamicFormController', function($scope){
    $scope.currentStep =1;
    $scope.showSubmitted = false;
    $scope.formData = {};
    $scope.userData = [];
    $scope.nextStep= function (step){
        $scope.currentStep = step;
    };
    $scope.prevStep = function (step){
        $scope.nextStep = step;
    };
    $scope.submitForm = function(){
        $scope.userData.push(angular.copy($scope.formData));
        $scope.formData = {};
        $scope.currentStep = 1;
        $scope.showSubmitted = true;
    };
});