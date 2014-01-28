Ext.define('MedBlogs.model.Subscriptions',{

	extend: 'Ext.data.Model',
	config: {
		fields: 
		[
		    'name',
			'following',
			'notifications'
		],
		
		identifier: 'uuid',
		proxy: {
			type: 'localstorage',
			id: 'subscriptions'
		}
	}
});
