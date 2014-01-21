Ext.define('MedBlogs.store.Tasks',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.Tasks',
		data: 
		[
			{
				title : 'Room Change', 
				link: 'link 1',
				date: '20/01/14',
				creator: 'Dr Petrie',
				category: 'Anatomy',
				description: "The room for today's lecture is changed to 1.06.",
				complete: 'yes'
			},
			{
				title : 'Change of Venue', 
				link: 'link 3',
				date: '21/01/14',
				creator: 'Prof. Newell',
				category: 'SSC',
				description: 'Wednesday Lab session is now moved to take place in Ninewells Hospital as area has been provided due to certain cancellations in other classes.',
				complete: 'no'
			}
		]
	}
});

