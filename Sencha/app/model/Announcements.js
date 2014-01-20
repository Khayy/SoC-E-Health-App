Ext.define('MedBlogs.model.Announcements',{

	extend: 'Ext.data.Model',
	config: {
		fields: 
		[
		    'title',
			'link',
			'date',
			'creator',
			'category',
			'description'
		]
	}
});
