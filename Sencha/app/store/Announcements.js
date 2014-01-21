Ext.define('MedBlogs.store.Announcements',{
	extend: 'Ext.data.Store',
	config: {
		model: 'MedBlogs.model.Announcements',
        autoLoad: true,
        //If we need additional sorting - example grouper / sorter
        //sorters: 'firstName',
        //grouper: {
        //    groupFn: function(record) {
        //       return record.get('lastName')[0];
        //    }
        //},
        proxy: {
            type: 'ajax',
            url: 'feeds.json'
        }
		
	}
});

