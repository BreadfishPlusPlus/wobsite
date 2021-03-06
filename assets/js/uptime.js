var displayStatus = function (key, elem) {
    var $element = jQuery(elem);
    jQuery.getJSON('https://api.uptimerobot.com/getMonitors?apiKey=' + key + '&noJsonCallback=1&format=json&monitors=776327110-776470973', function (data) {
        if (data.stat == "ok" && data.monitors.monitor && data.monitors.monitor.length > 0) {
            var d = data.monitors.monitor[0];
            if (d.status === "2") {
                $element.addClass('text-success');
                $element.html('<i class="fa fa-thumbs-o-up"></i> Online (' + d.alltimeuptimeratio + '% uptime)');
            } else {
                $element.addClass('text-danger');
                $element.html('<i class="fa fa-thumbs-o-down"></i> Offline (' + d.alltimeuptimeratio + '% uptime)');
            }
        } else {
            $element.addClass('text-warning');
            $element.html('<i class="fa fa-question"></i> Unbekannt');
        }
    });
};
displayStatus('m776327110-9063e705c2e1721741a11ee3', '#service-teamspeak');
displayStatus('m776470973-6be83e56bfbb9477e071516e', '#service-chat');
displayStatus('m776523836-c6af347eaef0fd187f938c5c', '#service-screenshot');