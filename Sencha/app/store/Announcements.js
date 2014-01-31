Ext.define('MedBlogs.store.Announcements', {
    extend: 'Ext.data.Store',

    requires: [ 
        'MedBlogs.model.Announcements'
    ],

    config: {
        model: 'MedBlogs.model.Announcements',
        pageSize: 20,
        autoLoad:true,
        //remoteSort: true,
        sorters:[{
            property:'pubDate',
            direction:'DESC'
        }],
        proxy: {
            type: 'jsonp',
            url: 'http://137.117.146.199:8080/E-Health-Server/announcements',
            startParam:'offset',
            limitParam:'limit',
            timeout: 2000,
            reader: {
                type: 'json',
                rootProperty: 'announcements'
            },
            listeners: {
                afterRequest: function(request, success){
                    console.log("success ");
                    console.log("success " + success);
                }
            }
        }
    }
});