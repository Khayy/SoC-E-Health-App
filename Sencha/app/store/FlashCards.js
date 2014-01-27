Ext.define('MedBlogs.store.FlashCards',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.FlashCards',
		data: 
		[
			{
				id : '1', 
				category: 'anatomy',
				question: 'Which part of the body lala ?',
				answer: 'This part of the body lala'
			},
			{
				id : '2', 
				category: 'anatomy',
				question: 'Which bone in the body is... ?',
				answer: 'This bone is ...'
			}
		]
	}
});