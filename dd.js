export function ParseDMS(input) {
    var parts = input.split(/[^\d\w]+/);
    let secondi =Number(parts[3]+"."+ parts[4])
   var lat = ConvertDMSToDD(parts[0],parts[2], secondi , parts[5]);
   //var lng = ConvertDMSToDD(parts[0],parts[2], secondi , parts[5]);

    return(lat)
}

export function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    //var dd = 44 + 8/60 + 59.50/(60*60);
    var dd = Number(degrees) + Number(minutes/60) + Number(seconds/(60*60));

    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
}