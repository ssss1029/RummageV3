var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();
function run () {

		observeDOM( document ,function(){ 
			if($("#rso").length && $("#rummage_div").length == 0) {
				chrome.runtime.sendMessage({greeting: $("#gbqfq").val()}, function(response) {
				  alert(response.farewell);
				});
				$("#rso").prepend('<div id="rummage_div" class="panel panel-default"><div class="panel-heading">Results by <span class="logo">Rummage</span></div><ul class="list-group"><li class="list-group-item"><div class="media"><div class="media-left"><a href="#"><img class="media-object" width="40px" height="40px"src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Drive-icon.png" alt="..."></a></div><div class="media-body"><a href="#" class="media-heading"></a></div></div></li></ul></div>');
				$("#rummage_div .list-group-item .media-heading").text($("#gbqfq").val());
				
			}
		});
		
}
	run();
	window.addEventListener("hashchange", run, false);

