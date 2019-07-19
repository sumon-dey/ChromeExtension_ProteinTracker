$(function(){
	chrome.storage.sync.get('goal',function(items){
			$('#goal').val(items.goal);
	});
	
	$('#save').click(function(){
		var goal=$('#goal').val();
		if(goal){
			chrome.storage.sync.set({'goal':goal},function(){
				close();
			});
		}
	});
});