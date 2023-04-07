let data = [
    {
        university: 'Texas State University',
        acceptence: '70%'
    },
    {
        university: 'University of Texas at San Antonio',
        acceptence: '90%'
    },
    {
        university: 'Texas A&M University San Antonio',
        acceptence: '73%'
    },
    {
        university: 'University of North Texas',
        acceptence: '81%'
    },
    {
        university: 'University of Houston',
        acceptence: '66%'
    },
    {
        university: 'Texas Tech University',
        acceptence: '68%'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.university + ' ' + 'acceptence rate is ' + item.acceptence + ' likely to accept students' + '</div>';
});

info.innerHTML = details.join('\n');