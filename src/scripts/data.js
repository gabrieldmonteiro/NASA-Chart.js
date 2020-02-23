async function getData() {
    const xs = [];
    const ys = [];

    const response = await fetch('./data/ZonAnn.Ts+dSST.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);

    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        xs.push(year);
        const temp = columns[1];
        ys.push(parseFloat(temp) + 14);        
    });

    return {xs,ys};
}

export default getData;