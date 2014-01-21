Ext.define('MedBlogs.store.Subscriptions',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.Subscriptions',
		data: 
		[
			{
				name : 'Year 1', 
				following: 'no',
				notifications: 'no'
			},
			{
				name : 'Year 2', 
				following: 'no',
				notifications: 'no'
			},
			{
				name : 'Year 3', 
				following: 'no',
				notifications: 'no'
			},
			{
				name : 'Year 4', 
				following: 'no',
				notifications: 'no'
			},
			{
				name : 'Year 5', 
				following: 'no',
				notifications: 'no'
			}
		]
	}
});
