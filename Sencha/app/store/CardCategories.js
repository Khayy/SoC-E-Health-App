Ext.define('MedBlogs.store.CardCategories', {
    extend: 'Ext.data.Store',

   	config: {
		model: 'MedBlogs.model.CardCategories',
		data: 
		[
			{
				id : '1', 
				image: 'resources/images/placeholder.png',
				category: 'Ageing &amp; childhood<br />development'
			},
			{
				id : '2', 
				image: 'resources/images/placeholder.png',
				category: 'Cardiovascular<br /> &nbsp;'
			},
			{
				id : '3', 
				image: 'resources/images/placeholder.png',
				category: 'Dermatology<br /> &nbsp;'
			},
			{
				id : '4', 
				image: 'resources/images/placeholder.png',
				category: 'Endocrine<br /> &nbsp;'
			},
			{
				id : '5', 
				image: 'resources/images/placeholder.png',
				category: 'ENT<br /> &nbsp;'
			},
			{
				id : '6', 
				image: 'resources/images/placeholder.png',
				category: 'Haematology<br /> &nbsp;'
			},
			{
				id : '7', 
				image: 'resources/images/placeholder.png',
				category: 'Musculoskeletal<br /> &nbsp;'
			},
			{
				id : '8', 
				image: 'resources/images/placeholder.png',
				category: 'Neurology<br /> &nbsp;'
			},
			{
				id : '9', 
				image: 'resources/images/placeholder.png',
				category: 'Opthalmology<br /> &nbsp;'
			},
			{
				id : '10', 
				image: 'resources/images/placeholder.png',
				category: 'Psychiatry<br /> &nbsp;'
			},
			{
				id : '11', 
				image: 'resources/images/placeholder.png',
				category: 'Renal<br /> &nbsp;'
			},
			{
				id : '12', 
				image: 'resources/images/placeholder.png',
				category: 'Resipiratory<br /> &nbsp;'
			}
		]
	}
});