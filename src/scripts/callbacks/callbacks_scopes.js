(function(){

    let allUserData = [];
    let globalUser = {'f_name':'Shweta', 'l_name':'Purushe'}; // global object

    // this is the callback function
    function logStuff (userData) {

        let testLog = 'Testing Logging';
        console.log(testLog);

        if ( typeof userData === "string"){
            console.log(userData);
        }
        else if ( typeof userData === "object"){
            for (var item in userData) {
                console.log(item + ": " + userData[item]);
            }
        }
    }


    // this is the function to which the callback function's defn is passed
    // higher Order function
    function containingFunc (options, callback){

        let c_f_name = 'CFirstName';
        let c_l_name = 'CLastName';

        allUserData.push(options);

        console.log("Parameters passed ...");
        if(typeof callback === 'function') callback(options); // pass parameters

        console.log("Containingfunc scope ...");
        if(typeof callback === 'function') callback({'f_name': c_f_name, 'l_name': c_l_name});// access to containingFunc scope

        console.log("Global Scope ...");
        if(typeof callback === 'function') callback(globalUser);//can access global scope
    }

     //containingFunc({'f_name':'XXX', 'l_name':'YYYY'}, logStuff);// we pass only the defn



     /*************************************
     UNDERSTANDING 'this' within callbacks
     **************************************/
     // function higherOrderFunc (callback){
     //     callback();
     // }
     //
     // function getThis (){
     //     console.log("printing THIS", this);
     // }
     //
     // higherOrderFunc(getThis);


     //2.
     // let clientData = {
     //     id: 1234,
     //     fullName: 'Not Set',
     //
     //     setName: function(f_name, l_name){
     //         this.fullName = f_name + ' ' + l_name;
     //     }
     // };
})();
