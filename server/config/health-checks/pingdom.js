export default {
    name: 'Pingdom Check',
    description : 'Check ',
    checks : [
        {
            name: '/uk (through Fastly)',
            severity: 1,
            businessImpact: 'No Next Front Page',
            technicalSummary: 'Reports on pingdom check for the /uk endpoint, going through Fastly',
            panicGuide: 'Yes, panic',
            type: 'pingdom',
            interval: '60s',
            checkId: 1581695
        },
        {
            name: '/uk (straight to EU)',
            severity: 2,
            businessImpact: 'No Next Front Page served from the EU servers',
            technicalSummary: 'Reports on pingdom check for the /uk endpoint, going directly to the EU-based app',
            panicGuide: 'Panic is the US app is also down',
            type: 'pingdom',
            interval: '60s',
            checkId: 1704637
        },
        {
            name: '/uk (straight to US)',
            severity: 2,
            businessImpact: 'No Next Front Page served from the US servers',
            technicalSummary: 'Reports on pingdom check for the /uk endpoint, going directly to the US-based app',
            panicGuide: 'Panic is the EU app is also down',
            type: 'pingdom',
            interval: '60s',
            checkId: 1843725
        }
    ]
}
