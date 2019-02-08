window.onload = function(){
    var sites = []; 
    var strings = []; 
   
    document.getElementById('save').onclick = function() {
        var value = document.getElementById('savewebsite').value;
        var userstring = document.getElementById("UAS");
        var stringact = userstring.options[userstring.selectedIndex].text;

        sites.push(value);
        strings.push(stringact);

        chrome.storage.sync.set({'WEBLIST': sites}, function(){
        });
        chrome.storage.sync.set({'STRINGLIST': strings}, function(){
            alert(value + ' changed to ' + stringact + ' Successfully added to list');
        });
    }; 
    document.getElementById('get').onclick = function(){
        chrome.storage.sync.get(['WEBLIST', 'STRINGLIST'], function(data){
            alert(['Websites:\n' + data.WEBLIST +'\nUser Agent Strings:\n'+ data.STRINGLIST]);
            
        });
    }
    document.getElementById('clear').onclick = function(){
        chrome.storage.sync.remove(['WEBLIST', 'STRINGLIST'], function(data){
            chrome.storage.sync.clear();
            alert('Storage Cleared');
        });
        }
    }
    
