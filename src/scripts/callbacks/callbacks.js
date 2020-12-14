(function(){

  let msgs = [
    {'title': 'Message 1', 'text': 'This is message one'},
    {'title': 'Message 2', 'text': 'This is message two'},
  ];

  function getMessages(m, v){

    setTimeout(() =>{
      let output = '';
      msgs.forEach((item, i) => {
        output += `<li>${item.title}</li>`;
      });
      document.body.innerHTML = output;
      console.log("Length of messages is : ", msgs.length);
    }, 1000);

  }

  function createMessage_without_callback(message_title, message_text){
    setTimeout(() =>{
      msgs.push({'title': message_title, 'text': message_text});
    }, 2000);
  }

  function createMessage_with_callback(message_title, message_text, callback){

    setTimeout(() =>{
      msgs.push({'title': message_title, 'text': message_text});

      if(typeof callback === 'function'){ // incase a non-function is passes or no argument is sent
        callback();
      }

    }, 2000);
  }

  //TEST1
  // getMessages();
  // createMessage_without_callback("Message 3", "This is Message 3");
  // getMessages(); // Even if called later, returns 2 because it finishes faster that the createMessage_without_callback


  //TEST 2
  createMessage_with_callback("Message 4", "This is Message 4", getMessages);

})();
