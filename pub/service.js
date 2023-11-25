app.service('myserv', function() {
          this.getServiceList = function () {
    return [{"serviceName":"od.demo.java:concatenateStrings","description":"This service concatenates two strings using Java.\nThe input StringA and StringB are joined together and returned as result","serviceinputs":[{"inputName":"stringA","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"},{"inputName":"stringB","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"}],"serviceoutputs":[{"outputName":"result","outputType":"String","outputComments":"no comment","required":true,"wrapperType":"--"}]},{"serviceName":"od.demo.services:decryptEncryptFile","description":"Very simple encryption service","serviceinputs":[],"serviceoutputs":[]},{"serviceName":"od.demo.services:mapLineItems","description":"This transforms the line items from an order object into an array used for updating a database","serviceinputs":[{"inputName":"order(edge.nl_od_demo.documenttypes:Order)","inputType":"Document Reference","inputComments":"no comment","required":true,"wrapperType":"--"},{"inputName":"orderId","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"}],"serviceoutputs":[{"outputName":"inputs","outputType":"Document List","outputComments":"no comment","required":false,"wrapperType":"--"}]}];
}
this.getISEndpoint = function() { 
 return 'http://sag-c02f6028md6p.mgmt:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "25-11-2023 23:46:30 CET";
}
this.getPackageInfo = function(){
 return{"packageName":"OD_Demo_Utils","createdDate":"22-11-2023 00:54:24 CET","version":"1.0"};
}
});
