const widgets = require('./widgets');

const template = {
    Parameters: {
        DashboardBody: {
            Type: 'String'
        },
        DashboardName: {
            Type: 'String'
        }
    },
    Resources: {
        Dashboard: {
            Type : 'AWS::CloudWatch::Dashboard',
            Properties : {
                DashboardName : { Ref: 'DashboardName' },
                DashboardBody : JSON.stringify(widgets)
            }
        }
    },
    Outputs: {
        
    }
}

// output to be piped to template.json
console.log(JSON.stringify(template, null, 4));