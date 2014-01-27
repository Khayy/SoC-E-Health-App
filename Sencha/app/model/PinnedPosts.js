Ext.define('MedBlogs.model.PinnedPosts',{

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