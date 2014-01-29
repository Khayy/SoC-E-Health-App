Ext.define('MedBlogs.store.AnnouncementsStore', {
    extend: 'Ext.data.Store',

    requires: [ 
        'MedBlogs.model.Announcements'
        //,'MedBlogs.proxy.AnnouncementProxy'
    ],

    config: {
        model: 'MedBlogs.model.Announcements',
        pageSize: 10,
        autoLoad:true,
        remoteFilter: true,
        remoteSort: true,
        sorters:[{
            property:'pubDate',
            direction:'DESC'
        }]
        //,
        //load
    }
});