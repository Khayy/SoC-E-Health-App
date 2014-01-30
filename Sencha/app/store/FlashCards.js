Ext.define('MedBlogs.store.FlashCards',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.FlashCards',
		data: 
		[
			{
				id : '1', 
				category: 'anatomy',
				question: 'What is important to remember about a sudden decline in health in the elderly?',
				answer: 'Always due to disease'
			},
			{
				id : '2', 
				category: 'anatomy',
				question: 'What are the key to living to the age of 100?',
				answer: 'Non-smoker<br />Slim, tall<br />Little diabetes, dementia, heart disease<br />Practical, strong<br />Keep friends'
			},
			{
				id : '3', 
				category: 'anatomy',
				question: 'How much walking per week confers with substantial benefits to your health 30% cardiovascular event reduction?',
				answer: '45-75 min per week'
			},
			{
				id : '4', 
				category: 'anatomy',
				question: 'Does a 50% calorie restricted diet make you live longer?',
				answer: 'Proved correct in rats'
			},
			{
				id : '5', 
				category: 'anatomy',
				question: 'Why are old people different in terms of their presentation of illness? ',
				answer: 'May mount of an immune response<br />Blunted heart rate rise<br />Comorbid disease (eg. Heart failure, renal failure, dementia)<br />Polypharmacy (eg. Beta blockers)'
			}
		]
	}
});