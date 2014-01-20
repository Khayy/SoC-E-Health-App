Ext.define('MedBlogs.store.Announcements',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.Announcements',
		data: 
		[
			{
				title : 'title 1', 
				link: 'link 1',
				date: 'date 1',
				creator: 'author 1',
				category: 'category 1',
				description: 'description 1'
			},
			{
				title : 'title 2', 
				link: 'link 2',
				date: 'date 2',
				creator: 'author 2',
				category: 'category 2',
				description: 'description 2'
			}
		]
	}
});

