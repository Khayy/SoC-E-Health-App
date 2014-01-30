Ext.define('MedBlogs.store.Subscriptions',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.Subscriptions',
		getYears: function(){
			var years = [];
			Ext.Array.each(this.getData().items, function(item, index){
				if(item.following === 'yes')
					years.push(item.name.replace('Year ', ''));
			});
			return years;
		}
	}
});
