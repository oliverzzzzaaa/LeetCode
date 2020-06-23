function test1(addresses) {
    let re = /[0-9A-Fa-f]{4}/g;
        return addresses.map(address => {
            // address = address.toString();
            if (address.split(".").length > 1){
                let splitadd = address.split('.').every(section => {
                    re.test(section) || section.length < 1
                })
                if(splitadd){
                    return 'IPv4'
                }else{
                    return 'Neither'
                }
            } else if (address.split(":").length > 1){
                if (address.split(':').every(section => re.test(parseInt(section, 16)) || section.length < 1)) {
                    return 'IPv6'
                }else{
                    return 'Neither'
                }
            }
        })
}

let re = /[0-9A-Fa-f]{4}/g;
console.log(re)

let one = ['2001:0db8:0000:0000:0000:ff00:0042:8329']

console.log(test1(one))