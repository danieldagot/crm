import React, { PureComponent } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

export default class TopEmployees  extends PureComponent {
    constructor(props) {
        super()
    }
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

    render() {
        let owners = {}
        let data = []
        console.log(this.props.data);
        
        this.props.data.filter(m => m.sold).map(m => owners[m.owner] ? null : owners[m.owner] = 0)
        this.props.data.filter(m => m.sold).map(m => owners[m.owner]++)
        let highests = Object.values(owners).sort(function (a, b) { return b - a }).splice(0, 3)

        for (let i of Object.keys(owners)) {
            if (owners[i] == highests[0]) {
                data.push({ name: i, sales: highests[0] })
            }
        }

        for (let i of Object.keys(owners)) {
            if (owners[i] == highests[1]) {
                data.push({ name: i, sales: highests[1] })
            }
        }

        for (let i of Object.keys(owners)) {
            if (owners[i] == highests[2]) {
                data.push({ name: i, sales: highests[2] })
            }
        }
        return (
            <ComposedChart
                layout="vertical"
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" barSize={20} fill="#413ea0" />
                {/* <Line dataKey="uv" stroke="#ff7300" /> */}
            </ComposedChart>
        );
    }
}
