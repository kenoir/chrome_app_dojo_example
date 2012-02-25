define(['dojo','dojo/_base/declare','dojo/on'],function(dojo,declare,on){
	declare('scratchClient.service',null,{
		get: function(){
			var xhrArgs = {
				url: "http://quiet-earth-5127.herokuapp.com/",
				handleAs: "json",
				load:function(data){
					on.emit(document, 'service.getSuccess', { payload: data } );
				},
				error:function(error){
					console.log(error);
				}
			}

			return dojo.xhrGet(xhrArgs);
		}

	});
});
