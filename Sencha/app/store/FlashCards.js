Ext.define('MedBlogs.store.FlashCards',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.FlashCards',
		/*data: [
			{
				cardSubject:'lalalala',
            	question:'Lorem ipsum',
            	answer:'Answer Lorem ipsum'
			}
		] */
		proxy: {
            type: 'jsonp',
            url: 'http://137.117.146.199:8080/E-Health-Server/flashcards',
            //url: 'questions.js',
            timeout: 2000,
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
	}
});