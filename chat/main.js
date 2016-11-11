 function showMessage(msg) {
 
	var message = msg.val();
	var messageSender = message.name;
	var messageContent = message.text;
	
	var messageEl = $("<div/>").addClass("message");
	var senderEl = $("<span/>").text(messageSender + ": ");
	var contentEl = $("<span/>").text(messageContent);
	
	messageEl.append(senderEl);
	messageEl.append(contentEl);
	$('#messages').append(messageEl);
 
 }
 
 function pushMessage(event) {
 
	if(event.keyCode == 13){
	
		var name = $('#nameInput').val();
		var text = $('#messageInput').val();
		
		chatData.push({name: name, text: text});
		
		$('#messageInput').val('');
		
	}
 }
 
var config = {
    apiKey: "AIzaSyDEdwCNf-iN9N5HkDdXtN9nGqRB7jczgh8",
    authDomain: "chat-app-22b17.firebaseapp.com",
    databaseURL: "https://chat-app-22b17.firebaseio.com",
    storageBucket: "chat-app-22b17.appspot.com",
    messagingSenderId: "225297080127"
  };
  
 firebase.initializeApp(config);
 
 var chatData = firebase.database().ref();
 
 $('#messageInput').keypress(pushMessage);
 
 chatData.on("child_added", showMessage);