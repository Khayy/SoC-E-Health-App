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
		autoload: true,
		identifier: 'uuid',
		proxy: {
			type: 'localstorage',
			id: 'pinnedposts'
		}
	}
});