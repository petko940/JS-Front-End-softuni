function browserHistory(obj, actions) {
    let browserName = obj["Browser Name"];
    let openTabs = obj["Open Tabs"];
    let recentlyClosed = obj["Recently Closed"];
    let browserLogs = obj["Browser Logs"];

    for (const act of actions) {
        let [action, ...data] = act.split(" ");
        if (action.includes("Open")) {
            openTabs.push(data[0]);
            browserLogs.push(`Open ${data[0]}`);
        } else if (action.includes("Close")) {
            if (openTabs.includes(data[0])) {
                let index = openTabs.indexOf(data[0]);
                openTabs.splice(index, 1);
                browserLogs.push(`Close ${data[0]}`);
                recentlyClosed.push(data[0]);
            }
        } else {
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
        }
    }

    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(", ")}`);
    console.log(`Recently Closed: ${recentlyClosed.join(", ")}`);
    console.log(`Browser Logs: ${browserLogs.join(", ")}`);
}


// browserHistory({
//     "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]

// )

// browserHistory({
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
// },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// )