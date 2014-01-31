Ext.define('MedBlogs.store.CardCategories', {
    extend: 'Ext.data.Store',

   	config: {
		model: 'MedBlogs.model.CardCategories',
		data: 
		[
			/*{
				id : '0', 
				image: 'resources/images/ageing_and_child_development.jpg',
				category: 'Ageing &amp; childhood<br />development'
			},*/
			{
				id : '1', 
				image: 'resources/images/cardiology.jpg',
				category: 'Cardiovascular<br /> &nbsp;'
			},
			{
				id : '2', 
				image: 'resources/images/dermatology.jpg',
				category: 'Dermatology<br /> &nbsp;'
			},
			{
				id : '3', 
				image: 'resources/images/endocrinology.jpg',
				category: 'Endocrine<br /> &nbsp;'
			},
			{
				id : '4', 
				image: 'resources/images/ENT.jpg',
				category: 'ENT<br /> &nbsp;'
			},
			{
				id : '5', 
				image: 'resources/images/GI.jpg',
				category: 'Haematology<br /> &nbsp;'
			},
			{
				id : '6', 
				image: 'resources/images/musculoskeletal.jpg',
				category: 'Musculoskeletal<br /> &nbsp;'
			},
			{
				id : '7', 
				image: 'resources/images/neurology.jpg',
				category: 'Neurology<br /> &nbsp;'
			},
			{
				id : '8', 
				image: 'resources/images/opthalmology.jpg',
				category: 'Opthalmology<br /> &nbsp;'
			},
			{
				id : '9', 
				image: 'resources/images/psychiatry.jpg',
				category: 'Psychiatry<br /> &nbsp;'
			},
			{
				id : '10', 
				image: 'resources/images/renal.jpg',
				category: 'Renal<br /> &nbsp;'
			},
			{
				id : '11', 
				image: 'resources/images/resipiratory.jpg',
				category: 'Resipiratory<br /> &nbsp;'
			}
		]
	}
});