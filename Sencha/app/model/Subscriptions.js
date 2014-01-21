Ext.define('MedBlogs.model.Subscriptions',{

	extend: 'Ext.data.Model',
	config: {
		fields: 
		[
		    'name',
			'following',
			'notifications'
		]
	}
});
