Ext.define('MedBlogs.model.Announcements',{

	extend: 'Ext.data.Model',
	config: {
		idProperty: 'link',
		fields: 
		[
			'uid',
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
