define(['dojo/_base/declare','dojo/_base/connect','dojo/dom','lib/scratchService'],
function(declare,connect,dom){
	declare('scratchClient.controller',null,{
		constructor: function(){
			var scratchService = new scratchClient.service;
			scratchService.get();

			connect.connect(document, 'service.getSuccess', this, this.handleGetContentSuccess);
		},	

		handleGetContentSuccess: function(event){
			var newContent  = event.payload.content;
			var contentNode = dom.byId("content");
			contentNode.innerHTML = newContent;
		}
	});
});
