/*Ext.define('MedBlogs.util.Proxy.Announcements', {
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
            //callbackName: 'feedscb',    
            
            callback: function(successful, data){
                if(successful === true) {
                    console.log(data.items.toString());
                    Ext.Array.each(data.items, function(item) {
                            // don't add duplicates and make the dates into date format
                            //if (announcementIds.indexOf(item.get('uid')) == -1) {
                                //announcementIds.push(item);
                            //if(announcementStore.getCount() < announcementStore.getPageSize()) {
                                announcementModel = Ext.create('MedBlogs.model.Announcements', item);
                                var tempDate = new Date(item.pubDate);
                                var month = tempDate.getMonth() + 1;
                                if(month<10) month = '0' + month;
                                var day = tempDate.getDate();
                                if(day<10) day = '0' + day;
                                var toDisplay = day + '/' + month + '/' + tempDate.getFullYear();
                                announcementModel.set('date', toDisplay);
                                announcementStore.add(announcementModel);
                            //}
                            //}
                    });
                    announcementStore.sync();
                } else {
                    Ext.Msg.alert('Sorry', 'Something went wrong. Please, try again later.', Ext.emptyFn);
                }
            }
        });
    }
});
*/

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
        }]
        ,
        proxy: {
            type: 'jsonp',
            url: 'http://137.117.146.199:8080/E-Health-Server/announcements',
            startParam:'offset',
            limitParam:'limit',
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