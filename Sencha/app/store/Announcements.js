Ext.define('MedBlogs.util.Proxy.Announcements', {
    singleton: true,
    requires: [
        'MedBlogs.model.Announcements',
        'Ext.data.JsonP'
    ],

    process: function(url) {
        var announcementStore = Ext.getStore('Announcements'),
            announcementIds = [],
            announcementModel;

        Ext.data.JsonP.request({
            url: url,
            //callbackKey: 'feedscb',
            callbackName: 'feedscb',    
            
            callback: function(successful, data){
                if(successful === true) {
                    Ext.Array.each(data.items, function(item) {
                            // don't add duplicates and make the dates into date format
                            //if (announcementIds.indexOf(item.id) == -1) {
                                announcementIds.push(item.id);

                                announcementModel = Ext.create('MedBlogs.model.Announcements', item);
                                var tempDate = new Date(item.pubDate);
                                //JANUARY 19, 2014
                                var month = tempDate.getMonth() + 1;
                                if(month<10) month = '0' + month;
                                var toDisplay = tempDate.getDate() + '/' + month + '/' + tempDate.getFullYear();
                                announcementModel.set('date', toDisplay);
                                announcementStore.add(announcementModel);
                            //}
                    });
                } else {
                    Ext.Msg.alert('Sorry', 'Something went wrong. Please, try again later.', Ext.emptyFn);
                }
            }
            /*

            success: function(data) {
                Ext.Array.each(data.items, function(item) {
                        // don't add duplicates and make the dates into date format
                        if (announcementIds.indexOf(item.id) == -1) {
                            announcementIds.push(item.id);

                            announcementModel = Ext.create('MedBlogs.model.Announcements', item);
                            announcementModel.set('date') = toString(new Date(item.pubDate));
                            announcementStore.add(announcementModel);
                        }
                });
            },
            failure: function(){
                Ext.Msg.alert('Sorry', 'Something went wrong. Please, try again later.', Ext.emptyFn);
            } */
        });
    }
});

Ext.define('MedBlogs.store.Announcements', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MedBlogs.model.Announcements',
        autoLoad: true,
        pageSize: 10,
        sorters:[{
            property:'pubDate',
            direction:'DESC'
        }]
    }
});

/*Ext.define('MedBlogs.store.Announcements',{
    extend: 'Ext.data.Store',

    requires: [
        'MedBlogs.model.Announcements',
        'Ext.data.proxy.JsonP'
    ],
    config: {
        model: 'MedBlogs.model.Announcements',
        autoLoad: true,
        pageSize: 10,
        proxy: {
            type: 'jsonp',
            url: 'http://137.117.146.199:8080/E-Health-Server/feeds/all-years',
            startParam:'offset',
            limitParam:'limit',
            page:'page',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});
*/
