Ext.define('MedBlogs.model.Tasks',{

	extend: 'Ext.data.Model',
	config: {
		fields: 
		[
		    'title',
			'link',
			'date',
			'creator',
			'category',
			'description',
			'complete'
		]
	}
});
