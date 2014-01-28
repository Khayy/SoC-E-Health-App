Ext.define('MedBlogs.model.Announcements',{

	extend: 'Ext.data.Model',
	config: {
		fields: 
		[
		    'title',
			'link',
			{name: 'pubDate', type: 'int'},
			'date',
			'creator',
			'category',
			'description'
		]
	}
});
