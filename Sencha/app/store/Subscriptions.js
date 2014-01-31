Ext.define('MedBlogs.store.Subscriptions',{
	extend: 'Ext.data.Store',
	requires : ['Ext.data.proxy.LocalStorage'],

	config: {
		model: 'MedBlogs.model.Subscriptions'
	},
	getYears: function(){
			var years = [];
			Ext.Array.each(this.getData().items, function(item, index){
				if(item.data.following === 'yes')
					years.push(item.data.name.replace('Year ', ''));
			});
			return years.join('x');
	}
});
