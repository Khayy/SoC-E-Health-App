Ext.define('MedBlogs.store.CardCategories', {
    extend: 'Ext.data.Store',

   	config: {
		model: 'MedBlogs.model.CardCategories',
		data: 
		[
			{
				id : '1', 
				image: 'resources/images/placeholder.png',
				category: 'Ageing and childhood development'
			},
			{
				id : '2', 
				image: 'resources/images/placeholder.png',
				category: 'Cardiovascular'
			},
			{
				id : '3', 
				image: 'resources/images/placeholder.png',
				category: 'Dermatology'
			},
			{
				id : '4', 
				image: 'resources/images/placeholder.png',
				category: 'Endocrine'
			},
			{
				id : '5', 
				image: 'resources/images/placeholder.png',
				category: 'ENT'
			},
			{
				id : '6', 
				image: 'resources/images/placeholder.png',
				category: 'Haematology'
			},
			{
				id : '7', 
				image: 'resources/images/placeholder.png',
				category: 'Musculoskeletal'
			},
			{
				id : '8', 
				image: 'resources/images/placeholder.png',
				category: 'Neurology'
			},
			{
				id : '9', 
				image: 'resources/images/placeholder.png',
				category: 'Opthalmology'
			},
			{
				id : '10', 
				image: 'resources/images/placeholder.png',
				category: 'Psychiatry'
			},
			{
				id : '11', 
				image: 'resources/images/placeholder.png',
				category: 'Renal'
			},
			{
				id : '12', 
				image: 'resources/images/placeholder.png',
				category: 'Resipiratory'
			}
		]
	}
});