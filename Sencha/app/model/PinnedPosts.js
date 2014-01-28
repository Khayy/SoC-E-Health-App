Ext.define('MedBlogs.model.PinnedPosts',{

	extend: 'Ext.data.Model',
	config: {
		fields: 
		[
			//'id',
		    'title',
			'link',
			'pubDate',
			'creator',
			'category',
			'description'
		],
		identifier: 'uuid',
		proxy: {
			type: 'localstorage',
			id: 'pinnedposts'
		}
	}
});